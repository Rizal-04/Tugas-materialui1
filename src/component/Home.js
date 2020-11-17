import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';


class Home extends Component{
      render(){
          return(
              <div>
                  <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                              <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2019%E2%80%93present.jpg" width="150" /><br/><br/>
                              <h1 style={{ fontFamily: 'New York', color: 'blue', fontSize: 50}}>Selamat datang di Komunitas Profesional ini </h1><br/>
                              <Mui.Button variant="outlined" size="large" style={{width: '80%', height: '60px', borderRadius: 10}}>
                                Cari pekerjaan
                              </Mui.Button><br/><br/>
                              <Mui.Button variant="outlined" size="large" style={{width: '80%', height: '60px', borderRadius: 10}}>
                                  Temukan orang yang anda kenal
                                  </Mui.Button><br/><br/>
                                  <Mui.Button variant="outlined" size="large" style={{width: '80%', height: '60px', borderRadius: 10}}>
                                  Pelajari keahlian baru
                                  </Mui.Button>       
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                             <h4 style={{marginLeft: 350, color: 'GrayText' }} >Bergabung sekarang<Mui.Button variant="outlined" color="primary" style={{float: 'right',marginTop: -10, borderRadius: 20,marginRight: 20 }}>
                                 Log in
                            </Mui.Button></h4><br/><br/>
                            <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" width="700px"/>
                             </Mui.Grid><br/>
                           
                           <Mui.Grid item xs={12} sm={6}>
                           <h1 style={{ fontFamily: 'Arial', fontSize: 50}}>Temukan lowongan kerja dan magang</h1><br/>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                    
                            </Mui.Grid>
                            </Mui.Grid>
                </Mui.Container>
              </div>
             
          )
      }
}

export default Home;