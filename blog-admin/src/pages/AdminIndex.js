/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import "./AdminIndex.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";

import ArticleList from "./ArticleList";

import { Route } from "react-router-dom";
import AddArticle from "./AddArticle";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleClickArticle = (e) => {
    console.log(e.item.props);
    if (e.key == "addArticle") {
      props.history.push("/admin/add");
    } else {
      props.history.push("/admin/list");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">
              <Link to="/admin/add/">文章列表</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>后台</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <div>
              <Route path="/admin/" exact component={AddArticle} />
              <Route path="/admin/add/" exact component={AddArticle} />
              <Route path="/admin/list/" exact component={ArticleList} />
              <Route path="/admin/add/:id" exact component={AddArticle} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>rigblog.top</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;
