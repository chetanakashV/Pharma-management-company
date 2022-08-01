const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const isEmpty = require("is-empty");
const bcrypt = require('bcrypt');
const saltRound = 10;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const { query } = require("express");
const { default: isEmail } = require("validator/lib/isEmail");

const app = express();


//using the dependencies
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "DELETE"],
        credentials: true,
    })
);
app.use(
    cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "DELETE"],
        credentials: true,
    })
);
// app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (
    session ({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);


   
//connecting to database
const db = mysql.createConnection({
    user: "user",
    host: "localhost",
    password: "Password1#",
    database: "loginsystem", 
});

app.post('/register', (req, res)=> {

    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password; 

    if(isEmpty(username) ||isEmpty(name) || isEmpty(email) || isEmpty(password) || !isEmail(email)){
            console.log("Wrong input");
             return;
    }
    else{
    bcrypt.hash(password,saltRound, (error, hash) => {
        
        if (error) {
            console.log(err)
            return;
        }
        else{

        db.execute("SELECT * FROM users WHERE email = ? UNION SELECT * FROM users WHERE username = ?;",
        [email,username]  ,(err,result) => {
           
            if(result.length > 0){
                 res.send("the user is already registered");
                 return ;
            }

            else{
            db.execute( 
              "INSERT INTO users (name,username,email,password) VALUES (?,?,?,?)",
              [name,username,email, hash], 
              (err, result)=> {
                  if(err){
                  console.log(err);
                  return;
                  }
                  else{
                    console.log("it is successful");
                  }
              }
              );
              
            }

           

        })
    }
         
      
    });}

})
    

app.post('/registeru', (req, res)=> {

    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const password = req.body.password;
    const phone = req.body.phone; 

    if(isEmpty(username) ||isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(phone)|| isEmpty(address)|| !isEmail(email)) {
            console.log("Wrong input");
             return;
    }
    else{
    bcrypt.hash(password,saltRound, (error, hash) => {
        
        if (error) {
            console.log(err)
            return;
        }
        else{

        db.execute("SELECT * FROM customers WHERE email = ? UNION SELECT * FROM customers WHERE username = ?;",
        [email,username]  ,(err,result) => {
           
            if(result.length > 0){
                 res.send("the user is already registered");
                 return ;
            }

            else{
            db.execute( 
              "INSERT INTO customers (name,phone,username,email,password,address) VALUES (?,?,?,?,?,?)",
              [name,phone,username,email, hash,address], 
              (err, result)=> {
                  if(err){
                  console.log(err);
                  return;
                  }
                  else{
                    console.log("it is successful");
                    res.send("the registration is succesful");
                  }
              }
              )
              
            }

        })
    }
         
      
    });}

})
    
    const verifyJWT = (req, res, next) => {
        const token = req.headers["x-access-token"];
        
        if (!token) {
            res.send("We need a token, please give it to us next time");
        } else { 
            jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "you are failed to authenticate"});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.get('/isUserAuth', verifyJWT , (req, res) => {
    res.send("You are authenticated Congrats:")
})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.get("/loginu", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post('/login', (req, res) => {


    const username = req.body.username;
    const password = req.body.password; 
    
    

    db.execute(
        "SELECT * FROM users WHERE username = ?;", [username], (err, result)=> {
            if (err) { res.send({err: err});} 
            
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result;

                        console.log(req.session.user);
                        res.json({auth: true, token: token, result: result});
                    } else{
                        res.json({auth: false, message: "Wrong username password"}); 
                    }
                })
            } else {
                res.json({auth: false, message: "no user exists"});
            }
        }
    );
    
});

app.post('/loginu', (req, res) => {


    const username = req.body.username;
    const password = req.body.password;
    
    

    db.execute(
        "SELECT * FROM customers WHERE username = ?;", [username], (err, result)=>{
            if (err) { res.send({err: err});} 
            
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result;

                        console.log(req.session.user);
                        res.json({auth: true, token: token, result: result});
                    } else{
                        res.json({auth: false, message: "Wrong username password"}); 
                    }
                })
            } else {
                res.json({auth: false, message: "no user exists"});
            }
        }
    );
    
});




app.post('/admin/addcustomer', (req, res)=> {

    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
     
        db.execute("SELECT * FROM customers WHERE email = ?;",
        [email]  ,(err,result) => {
            if(result.length > 0){
                 res.send("the customer is already registered");
                 return ;
            }
            else{
            db.execute( 
              "INSERT INTO customers (name,phone,address,email) VALUES (?,?,?,?)",
              [name,phone, address ,email], 
              (err, result)=> {
                  console.log(err);
              }
              );
            }

           

        })
})

app.post('/admin/addstock', (req, res)=> {

    const name = req.body.name;
    const expiry = req.body.expiry;
    const quantity = req.body.quantity;
    const comp_id = req.body.comp_id;
     
        db.execute("INSERT INTO stocks (name,quantity,expiry,comp_id) VALUES (?,?,?,?)",
        [name,quantity,expiry,comp_id]  ,(err,result) => {
                if(err){ console.log(err)}


        })
})

app.post('/admin/addcompany', (req, res)=> {

    
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
     
        db.execute("SELECT * FROM companies WHERE email = ?;",
        [email]  ,(err,result) => {
            if(result.length > 0){
                 res.send("the company is already registered");
                 return ;
            }
            else{
            db.execute( 
              "INSERT INTO companies (name,address,email) VALUES (?,?,?)",
              [name, address ,email], 
              (err, result)=> {
                  console.log(err);
              }
              )
            }
        })
})


 app.get("/admin/viewcustomers",
 (req, res) => {
 const sqlSelect = "SELECT * FROM customers ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });

 app.get("/admin/viewstock",
 (req, res) => {
 const sqlSelect = "SELECT * FROM stocks ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });

 app.get("/admin/viewexpired",
 (req, res) => {
 const sqlSelect = "SELECT * FROM expired_stock ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });


 app.get("/admin/viewcompanies", 
 (req, res) => {
 const sqlSelect = "SELECT * FROM companies ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });

 app.get("/admin/vieworders", 
 (req, res) => {
 const sqlSelect = "SELECT * FROM orders ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });

 app.get("/user/viewsuccorders/:username", 
 (req, res) => {
 const username = req.params.username;
 const sqlSelect = "SELECT * FROM orders_success WHERE cus_name = ? ";
 db.execute(sqlSelect, [username], (err, result) => {
 res.send(result);
 });
 });

 app.get("/user/viewpenorders/:username", 
 (req, res) => {
 const username = req.params.username;
 const sqlSelect = "SELECT * FROM orders WHERE cus_name = ? ";
 db.execute(sqlSelect, [username], (err, result) => {
 res.send(result);
 });
 });

 app.get("/admin/viewsuccessfulorders", 
 (req, res) => {
 const sqlSelect = "SELECT * FROM orders_success ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });

app.listen(3001, () => {
    console.log("running server");
});

app.get("/user/myprofile",
 (req, res) => {
 const sqlSelect = "SELECT * FROM companies ";
 db.execute(sqlSelect, (err, result) => {
 res.send(result);
 });
 });

 app.get("/admin/viewstocks/viewdrugs", (req,res) => {
     const sqlSelect = "SELECT * FROM drugs ";
     db.execute(sqlSelect,(err,result) => {
         res.send(result);
     });
 });

 app.get("/admin/viewstocks/viewcovid", (req,res) => {
     const sqlSelect = "SELECT * FROM covid_needs ";
     db.execute(sqlSelect,(err,result) => {
         res.send(result);
     });
 });

 app.delete("/admin/deletecompany/:comp_id", (req, res) => {
    const comp_id = req.params.comp_id;
    const sqlDelete = "DELETE FROM companies WHERE comp_id  = ?";
    
    db.query(sqlDelete, comp_id, (err, result) => {
    if (err) console.log(err);
    });
    });
 app.delete("/admin/deletestock/:stock_id", (req, res) => {
    const stock_id = req.params.stock_id;
    const sqlDelete = "DELETE FROM stocks WHERE stock_id  = ?";
    
    db.query(sqlDelete, stock_id, (err, result) => {
    if (err) console.log(err);
    });
    });

 app.delete("/admin/deleteorder/:orderid", (req, res) => {
    const orderid = req.params.orderid;
    const sqlDelete = "DELETE FROM orders WHERE orderid  = ?";
    

    db.query(sqlDelete, orderid, (err, result) => {
    if (err) console.log(err);
    });
    });

 app.delete("/admin/deletecustomer/:cid", (req, res) => {
    const cid = req.params.cid;
    const sqlDelete = "DELETE FROM customers WHERE cid  = ?";
    
    db.query(sqlDelete, cid, (err, result) => {
    if (err) console.log(err); 
    });
    });
    
app.get("/user/viewdetails/:username",(req,res) => {
    const username = req.params.username;
    db.execute("SELECT * FROM customers WHERE username = ?",username,(err,result) => {
        if(err){console.log(err);}
        res.send(result);
    })
})
app.post('/admin/updatecompany', (req, res) => {
    const comp_id = req.body.comp_id
    const name = req.body.name
    const email=req.body.email
    const address = req.body.address
    db.query("UPDATE companies SET name=?,email=?,address=? WHERE comp_id=?", [name,email,address,comp_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ ff: 's' })
        }
    })
})
app.post('/admin/editstock', (req, res) => {
    const stock_id = req.body.stock_id;
    const quantity = req.body.quantity;
    db.query("UPDATE stocks SET quantity = ? WHERE stock_id=?", [quantity,stock_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ ff: 's' })
        }
    })
})

app.post('/user/buy', (req,res ) => {
     const username = req.body.username;
     const no_paracetmol = req.body.no_paracetmol;
     const no_ibu = req.body.no_ibu;
     const no_dolo = req.body.no_dolo;
     const no_pan = req.body.no_pan;
     const no_arip = req.body.no_arip;
     const no_beds = req.body.no_beds;
     const no_oxime = req.body.no_oxime;
     const total_total = req.body.total_total;

     db.execute('INSERT INTO orders (cus_name,no_paracetmol,no_ibu,no_dolo,no_pan,no_arip,no_beds,no_oxime,total_total) VALUES(?,?,?,?,?,?,?,?,?)',[username,no_paracetmol,no_ibu,no_dolo,no_pan,no_arip,no_beds,no_oxime,total_total], (err,res) => {
         if(err){
             console.log(err);
             return;
    } })
})

app.post('/admin/confirmorder', (req,res) => {
    const orderid = req.body.orderid;

    db.execute("INSERT INTO orders_success SELECT * FROM orders WHERE orderid = ?",[orderid],(err,res) => {
        if(err) console.log(err);
    })
})

app.post('/admin/updatestock', (req,res) => {

    db.execute("INSERT INTO expired_stock SELECT * FROM stocks WHERE expiry < CURDATE(); ",(err,res) => {
        if(err) console.log(err);
    })
})

app.delete('/admin/deleteexpired', (req,res) => {
    db.execute("DELETE FROM stocks WHERE expiry < CURDATE();")
})

app.get('/getpara',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'paracetmol'",(err,result) => {
        res.send(result);
    })
});
app.get('/getpibu',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'ibuprofen'",(err,res) => {
        res.send(res);
    })
});
app.get('/getpan',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'pandol'",(err,result) => {
        res.send(result);
    })
})
app.get('/getdolo',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'dolo'",(err,result) => {
        if(err) console.log(err);
        res.send(result);
    })
})
app.get('/getazi',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'ariprazole'",(err,res) => {
        res.send(res);
        console.log(res);
    })
})
app.get('/getbeds',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'beds'",(err,res) => {
        res.send(res);
    })
})
app.get('/getoxi',(req,res) => {
    db.execute("SELECT price FROM prices WHERE name = 'oximeters'",(err,result) => {
        res.send(result);
    })
})

