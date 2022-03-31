const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page =1){

const offset= helper.getOffset(page,config.listPerPage);
const rows= await db.query(`SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`);
const data = helper.emptyOrRows(rows);
const meta= {page};

return {data,meta}

}

async function create(programmingLanguage){
    const result= await db.query(`INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    ("${programmingLanguage.name}", 
    ${programmingLanguage.released_year},
     ${programmingLanguage.githut_rank}, 
     ${programmingLanguage.pypl_rank}, ${programmingLanguage.tiobe_rank})`
  );
    let message= 'Error en crear el lenguaje de programación';
    if(result.affectedRows){
        message='Se creo correctamente el lenguaje de programación';
    }
return message;
}
async function update(id,programmingLanguages){
    const result = await db.query(
        `UPDATE programming_languages 
        SET name="${programmingLanguage.name}",
         released_year=${programmingLanguage.released_year},
          githut_rank=${programmingLanguage.githut_rank}, 
        pypl_rank=${programmingLanguage.pypl_rank}, 
        tiobe_rank=${programmingLanguage.tiobe_rank} 
        WHERE id=${id}` 
      );
      let message = 'Error in updating programming language';
      if (result.affectedRows) {
        message = 'Programming language updated successfully';
      }
      return {message};
}
async function remove(id){
    const result=await db.query(` DELETE FROM 
    programming_languages 
    where id=${id}`);
    let message = 'Error in remove programming language';
    if (result.affectedRows) {
      message = 'Programming language removed successfully';
    }
    return {message};
};

module.exports={getMultiple,create,update,remove}