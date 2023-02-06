import React from "react"
import ImagesUpload from "../../components/imageUpDate/UploadImages";
import Logo from "../../assets/image/escolinha-do-chaguinha.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Add_Photos.css"

const Add_Photos = () => {
  const img1 = Logo;
  const alt1 = "Logo";
  

  
  return (
    <div className="container_add_photos" >
      <div className="row_header_add_photos">
        <div className="header_add_photos">
          <h1 className="title_add_photos">ADICINAR FOTOS</h1>
          <p>Para que suas fotos seja enviada para o album correto. Verifique se as fotos são do mesmo ano e que todas as informações esteja correta.</p>
        </div>
        <a href="/"><img className="logo_header"  src={img1} alt={alt1}  /></a>
      </div>
      
      <div className="my-3">
        <ImagesUpload />  
      </div>
    </div>
  );
}

export default Add_Photos
