function produtosRoutes(app){

  app.get("/produtos", (req,res) => {
    console.log("Recebeu requisição!!!");
    res.render("produtos/lista");
  });

}

module.exports = produtosRoutes;
