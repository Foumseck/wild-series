import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type program = {
  id: number;
  name: string;
};

class programRepository {
  async create(program: Omit<program, "id">) {
    // Execute the SQL INSERT query to add a new program to the "program" table
    const [result] = await databaseClient.query<Result>(
      "insert into program (name) values (?)",
      [program.name],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific program by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from program where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the program
    return rows[0] as program;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "program" table
    const [rows] = await databaseClient.query<Rows>("select * from program");

    // Return the array of categories
    return rows as program[];
  }

  async update(program: program) {
    // Execute the SQL UPDATE query to update an existing program in the "program" table
    const [result] = await databaseClient.query<Result>(
      "update program set name = ? where id = ?",
      [program.name, program.id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing program from the "program" table
    const [result] = await databaseClient.query<Result>(
      "delete from program where id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new programRepository();
