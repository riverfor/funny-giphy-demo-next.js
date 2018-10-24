
exports.up = function(knex, Promise) {
  return knex.schema.createTable("img_object",table=>{
      table.increments("id").unsigned().primary();
      table.string("title");
      table.string("url");
      table.string("tag");
  })

};

exports.down = function(knex, Promise) {

};
