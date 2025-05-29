const Sequelize = require("sequelize");
const sequelize = new Sequelize("usersbd", "root", "13799731", {
  dialect: "mysql",
  host: "localhost"
});

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelize.query("SELECT * FROM users;",
  function(err, result){
    if(err) console.log(err);
    console.log(result);
  }
)

sequelize.sync({force: true}).then(result=>{
  // console.log(result);
})
.catch(err=> console.log(err));