import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Galery = () => {
  const title1 = "teste 1";
  const description1 = "descrição 1";
  const img1 =
    "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png";
  const alt1 = "Image One";
  const className1 = "d-block w-100";

  const title2 = "teste 2";
  const description2 = "descrição 2";
  const img2 =
    "https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png";
  const alt2 = "Image Two";
  const className2 = "d-block w-100";

  return (
    <>
      <div>
        <div
          style={{
            display: "block",
            width: "100vw",
            height: "50vh",
            padding: 30,
            flexDirection: "column",
          }}
        >
          <h4>Galeria de Imagens</h4>
          <div>
            <Carousel>
              <Carousel.Item interval={3000}>
                <img className={className1} src={img1} alt={alt1} />
                <Carousel.Caption>
                  <h3>{title1}</h3>
                  <p>{description1}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className={className2} src={img2} alt={alt2} />
                <Carousel.Caption>
                  <h3>{title2}</h3>
                  <p>{description2}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginTop: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "#515151",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: 15,
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 5,
                  marginBottom: 5,
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "sans-serif",
                }}
                href="/"
              >
                VOLTAR PARA A HOME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Galery;
