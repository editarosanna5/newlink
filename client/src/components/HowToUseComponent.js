import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { reactBaseUrl } from '../shared/baseUrl';
import Header from './HeaderComponent';

function HowToUse() {

    return(
        <div className="container" id="page">
            <Header />
            <div className="row">
                <div className="col-12">
                    <h3 className="heading">Petunjuk Pemakaian</h3>
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6" >
                    <Media tag="li">
                        <Media left middle>
                            <Media object src="assets/images/Logo.png" alt= "Langkah 1" id="howtouseComp"/>
                        </Media>
                        <Media body className="ml-5 steps">
                            <Media heading id="mediaHeading">
                                <img src={reactBaseUrl + "assets/images/egg.gif"} alt="one" id="imgNumber"/>
                                Langkah 1
                            </Media>
                            <p id="paraContent">Buka aplikasi NewLink. Tampilan beranda akan muncul pertama kali Anda mengakses aplikasi NewLink</p>
                        </Media>
                    </Media>    
                    <Media tag="li">
                        <Media left middle>
                            <Media object src="assets/images/Logo.png" alt="Langkah 2" id="howtouseComp"/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading id="mediaHeading">
                                <img src={reactBaseUrl + "assets/images/number-2.png"} alt="two" id="imgNumber"/>
                                Langkah 2
                            </Media>
                            <p id="paraContent">Anda dapat melakukan pencarian mal pada halaman beranda atau dapat melakukan pencarian dengan menggunakan bilah pencarian.</p>
                        </Media>
                    </Media>
                    <Media tag="li">
                        <Media left middle>
                            <Media object src="assets/images/Logo.png" alt="Langkah 3" id="howtouseComp"/>
                        </Media>
                        <Media body className="ml-5 steps">
                            <Media heading id="mediaHeading">
                                <img src={reactBaseUrl + "assets/images/number-3.png"} alt="three" id="imgNumber"/>
                                Langkah 3
                            </Media>
                            <p id="paraContent">Klik pada mal yang ingin dikunjungi dan akses informasi yang tersedia untuk mengetahui kapasitas dari mal tersebut.</p>
                        </Media>
                    </Media>
                </div>
            </div>
            
        </div>
    );
}

export default HowToUse;    