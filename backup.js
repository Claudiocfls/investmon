app.get('/userlist', function(req, res) {
  models.User.findAll({}).then(function(todos) {
    res.json(todos);
  });
});

app.post('/todos', function(req, res) {
  models.Todo.create({
    title: req.body.title,
    UserId: req.body.user_id
  }).then(function(todo) {
    res.json(todo);
  });
});

app.get('/user/signin', function(req, res) {
  res.render('templates/login', {name: "Claudio", root_dir2: path.join(__dirname)});
});

app.get('/user/create', function(req, res) {
  res.render('templates/login', {name: "Claudio"});
});

app.post('/user/create', function(req, res) {
  if (req != null){
    // console.log(req.body);
    var email2 = req.body.email;
  models.User.create({
    email: email2
  }).then(function(user) {
    res.json(user);
  });
  }
});

app.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});