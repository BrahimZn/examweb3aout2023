import React from "react";
import JokeList from "components/Jokes/JokeList";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "components/About";
import ViewOneJoke from "components/Jokes/ViewOneJoke";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
            <Menu.Item>
              <Link to="/jokes">Joke</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">about</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/jokes" element={<JokeList />} />
          <Route path="/jokes/:id" element={<ViewOneJoke />} />
        </Routes>

        <Content style={{ padding: "30px 50px" }}></Content>
      </Layout>
    </Router>
  );
};

export default App;
