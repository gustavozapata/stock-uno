const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const app = express();

const stocks = [
  {
    id: 1,
    company: 1,
    shares: 8,
    value: 119.5,
  },
  {
    id: 2,
    company: 2,
    shares: 1,
    value: 548.24,
  },
  {
    id: 3,
    company: 3,
    shares: 1,
    value: 204.0,
  },
];

const companies = [
  {
    id: 1,
    name: "Apple",
    stockName: "APPL",
    founded: 1974,
  },
  {
    id: 2,
    name: "Tesla",
    stockName: "TSLA",
    founded: 2008,
  },
  {
    id: 3,
    name: "Microsoft",
    stockName: "MSFT",
    founded: 1981,
  },
];

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addStock: {
      type: StockType,
      description: "Add a stock",
      args: {
        company: { type: GraphQLNonNull(GraphQLInt) },
        shares: { type: GraphQLNonNull(GraphQLInt) },
        value: { type: GraphQLNonNull(GraphQLFloat) },
      },
      resolve: (parent, args) => {
        const stock = {
          id: stocks.length + 1,
          company: args.company,
          shares: args.shares,
          value: args.value,
        };
        stocks.push(stock);
        return stock;
      },
    },
    addCompany: {
      type: CompanyType,
      description: "Add a company",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        stockName: { type: GraphQLNonNull(GraphQLString) },
        founded: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const company = {
          id: stocks.length + 1,
          name: args.name,
          stockName: args.stockName,
          founded: args.founded,
        };
        companies.push(company);
        return company;
      },
    },
  }),
});

const StockType = new GraphQLObjectType({
  name: "Stock",
  description: "A stock from your stocks",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    company: { type: GraphQLNonNull(GraphQLInt) },
    shares: { type: GraphQLNonNull(GraphQLInt) },
    value: { type: GraphQLNonNull(GraphQLFloat) },
    company: {
      type: CompanyType,
      resolve: (stock) => {
        return companies.find((company) => company.id === stock.id);
      },
    },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: "Company",
  description: "A company from the list of public market companies",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    stockName: { type: GraphQLNonNull(GraphQLString) },
    founded: { type: GraphQLNonNull(GraphQLInt) },
    stocks: {
      type: new GraphQLList(StockType),
      resolve: (company) => {
        return stocks.filter((stock) => stock.company === company.id);
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    stock: {
      type: StockType,
      description: "Single Stock",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => stocks.find((stock) => stock.id === args.id),
    },
    stocks: {
      type: GraphQLList(StockType),
      description: "List of Stocks",
      resolve: () => stocks,
    },
    companies: {
      type: GraphQLList(CompanyType),
      description: "List of Companies",
      resolve: () => companies,
    },
    company: {
      type: CompanyType,
      description: "Single Company",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        companies.find((company) => company.id === args.id),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, //gives us a UI like Postmoan
  })
);
app.listen(5000, () => console.log("*** server running ***"));
