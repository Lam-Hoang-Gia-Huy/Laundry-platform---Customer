import React from 'react';
import { Layout, Affix } from 'antd';

import styled from "styled-components";
import HeroSection from '../HeroSection';


import Header from '../Header';

const {  Footer, Sider, Content } = Layout;

const MainLayout = (children) => {

    
    const data = {
        name: "The Laundry",
    }
    const { filter, list } = children



    return (

        <Layout>

            <Affix offsetTop={-1} onChange={(affixed) => console.log(affixed)}>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" />

                </Header>
            </Affix>

            <Content hasSider style={{padding:'20px'}}>

                <Layout style={{ minHeight: '100vh', position: 'relative' }} hasSider>


                    <Sider style={{ background: 'white', borderRadius:'1rem'}} className='h6'>

                        {/* <FilterForm></FilterForm> */}

                        {filter}


                    </Sider>





                    <Content>



                        < Wrapper >
                            <HeroSection myData={data}></HeroSection>

                            <div className="container grid grid-filter-collumn">
                                <section>
                                    {list}

                                </section>
                            </div>

                        </Wrapper>



                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center', background: '#1874fc', color: 'white', position: 'relative', width: "100%", bottom: '0' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>

    );



}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default MainLayout;

