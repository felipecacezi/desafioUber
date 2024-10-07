import {Knex} from "../src/database/knex/index";
const knex = Knex;

beforeAll(async () => {
  await knex.migrate.latest();
});

// afterAll(async () => {
//   await knex.destroy();
// });