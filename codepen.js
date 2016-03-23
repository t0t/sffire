
let ref = new Firebase("https://sergiofores.firebaseio.com/push");
ref.push().set( {
  "test": "a ver..."
} );


var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter;

class MainLayout extends React.Component {
  render() {
    return (
      <div className="Site">
          <ul className="Site__nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/work">Works</Link></li>
          </ul>
          {this.props.children}
      </div>
    )
  }
}

class Home extends React.Component {
 constructor(props){
    super(props);
    this.content = {};
  }
  render() {
    let ref = new Firebase("https://sergiofores.firebaseio.com/brand");
    ref.on("value", (snapshot) => { this.content = snapshot.val(); });
    return (
      <header className="Site__header">
        <h1>{this.content.description}</h1>
        <p>{this.content.title}</p>
        <p>{this.props.children}</p>
      </header>
    )
  }
}

class SearchLayout extends React.Component {
  render() {
    return (
      <main className="Site__main">
        {this.props.children}
      </main>
    )
  }
}

class Skills extends React.Component {
  constructor(props){
    super(props);
    this.content = {};
    this.url = 'https://sergiofores.firebaseapp.com/';
  }
  render() {
    let ref = new Firebase("https://sergiofores.firebaseio.com/blog/1/content");
    ref.on("value", (snapshot) => { this.content = snapshot.val(); });

    return (
      <section>
        <h1>{this.content.header}</h1>
        <img src={this.url+this.content.img}/>
        <p>{this.content.p}</p>
      </section>
    )
  }
}

class Works extends React.Component {

  constructor(props){
    super(props);
    this.content = {};
    this.child = {};
    this.val = {};
  }

  render() {
    let ref = new Firebase("https://sergiofores.firebaseio.com/portafolio/graphic/catalogos");
    ref.on("value", (snapshot) => {
      snapshot.forEach( (childSnapshot) => {
        this.val = childSnapshot.val();
      });
    });
    return (
      <section>
        <h1>{this.val.title}</h1>
        <p>{this.val.description}</p>
      </section>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route component={SearchLayout}>
        <Route path="skills" component={Skills} />
        <Route path="work" component={Works} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
