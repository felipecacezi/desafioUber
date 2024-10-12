import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('users', (table) => {
        table.integer('active').notNullable().defaultTo(1);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('users', (table) => {
        table.dropColumn('active');
    });
}

