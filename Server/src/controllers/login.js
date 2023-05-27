const express = require("express");
const user = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const verify = user.find((users) => {
    return users.email === email && users.password === password;
  });

  if (verify) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }

  /*
    solucion echa con if
if(user[0].email === email && user[0].password === password){
    res.status(200).json({access:true})
  }else{
    res.status(500).json({access:false})
  }
  */
};
module.exports = login;
