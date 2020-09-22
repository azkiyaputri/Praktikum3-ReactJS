import React from 'react';
class kontak extends React.Component{
    render(){
        return (
            <div class=" shadow-lg p-3 mb-2 bg-secondary text-black">
                <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Kontak Azkiya</h5>
                    <p class="card-text">Hubungi Azkiya dengan aplikasi dibawah</p>
                    <hr class="my-4"></hr>
                    <p class="card-text">Whattsapp</p>
                    <a href="https://api.whatsapp.com/send?phone=6281217090683" class="btn btn-danger">Whattsapp</a>
                    <br />
                    <br />
                    <p class="card-text">Instagram</p>
                    <a href="https://instagram.com/atskiya?igshid=hpppma80hrap" class="btn btn-danger">Instagram</a>
                </div>
                </div>
            </div>
        )
    }
}
export default kontak;
