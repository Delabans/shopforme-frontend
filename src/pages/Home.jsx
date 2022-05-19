import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";


const Div = styled.div`
  position: relative;
`;

export default function Home() {
    return(
      <Div>
      <Sidebar />
      <Dashboard />
    </Div>
    )
};

