import { useState, useEffect } from "react";
import { AiFillDelete, AiOutlineSelect } from "react-icons/ai";
import Modal from "../modal/modal";

const Products = () => {
  const productsFormData = {
    id: "",
    name: "",
    categorie: "",
    price: "",
    img: [""],
    desc: "",
  };

  const [formData, setFormData] = useState(productsFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [productsList, setProductsList] = useState([
    {
      name: "Iphone",
      categorie: "01",
      price: "50003",
      img: "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg",
      desc: "En iyi performans ve kullanım deneyimi",
      id: "01",
    },
    {
      name: "MacBook Air",
      categorie: "02",
      price: "72000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwSLUqHVyCeMyY6lFZ1O8mlrir_Oc6OnzuA&usqp=CAU",
      desc: "M1 çipli MacBook Air inanılmaz derecede kolay taşınabilen bir laptop.",
      id: "02",
    },
    {
      name: "Apple AirPods",
      categorie: "03",
      price: "14000",
      img: "https://m.media-amazon.com/images/I/81yI9T5VdwL._AC_SX522_.jpg",
      desc: "Yüksek ses kalitesi sunan Apple tasarımı dinamik sürücü",
      id: "03",
    },
    {
      name: "Apple Watch Ultra",
      categorie: "04",
      price: "27000",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_PF+watch-49-titanium-ultra_VW_PF_WF_CO+watch-face-49-alpine-ultra_VW_PF_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713658959%2C1660927567672%2C1661371585774",
      desc: "Mükemmel spor saatini yaratmak için her unsuru benzersiz performans ",
      id: "04",
    },
    {
      name: "Ipad Pro",
      categorie: "05",
      price: "30000",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210_GEO_TR?wid=728&hei=666&fmt=png-alpha&.v=1665507045406",
      desc: "Apple M2 çip, profesyonel iş akışlarında olağanüstü bir performans artışı ve tüm gün süren pil ömrü sağlıyor",
      id: "05",
    },
    {
      name: "AirPods",
      categorie: "06",
      price: "6000",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
      desc: "Olağanüstü ses ve daha verimli pil ömrü özelliklerini aynı anda sunuyor.",
      id: "06",
    },
    {
      name: "AirTag",
      categorie: "07",
      price: "700",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104?wid=890&hei=740&fmt=jpeg&qlt=90&.v=1617761672000",
      desc: "Kaybetme alışkanlığınız ortadan kalkıyor.",
      id: "07",
    },
    {
      name: "Xbox",
      categorie: "08",
      price: "10000",
      img: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2519&q=80",
      desc: "Yeni nesil son model konsollar.",
      id: "08",
    },
    {
      name: "PlayStation",
      categorie: "09",
      price: "10000",
      img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
      desc: "Yeni nesil son model konsollar.",
      id: "09",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [removedProductId, setRemovedProductId] = useState("");

  const handleFormSubmit = (e) => {
    debugger
    e.preventDefault();
    setFormSubmitted(true);

    if (formData.name && formData.price && formData.img &&formData.desc){
      debugger;
      //form başarılı bir şekilde doldurulduysa burdan ilerleyecez
      if (formData.id === "") {
        //ekleme işlemi yapılacak
        setProductsList([
          ...productsList,
          {
            ...formData,
            id: productsList.length,
            categorie : productsList.length
          },
        ]);
      } else {
        let _productList = [...productsList];
        const index = productsList.findIndex((x) => x.id === formData.id);
        _productList[index] = formData;
        setProductsList(_productList);

      }

      setShowModal(false);
      resetForm();
    }
  };
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData(productsFormData);
    setFormSubmitted(false);
  };

  const removeProduct = () => {
    setProductsList([...productsList.filter((x) => x.id !== removedProductId)]);
    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (productsList.length > 9) {
      localStorage.setItem("productList", JSON.stringify(productsList));
    }
  }, [productsList]);

  useEffect(() => {
    if (localStorage.getItem("productList")) {
      setProductsList(JSON.parse(localStorage.getItem("productList")));
    }
  }, []);

  return (
    <>
      <div className="products">
        <div className="header-01">
          <h1>Ürün listesi</h1>
          <button onClick={() => setShowModal(true)}>Ürün Ekle</button>
        </div>
        <div className="product">
          {
            productsList && productsList.map((produtc)=>(
              <div className="card-style" key={produtc.id}>
                <h3>{produtc.name}</h3>
                <img src={produtc.img} />
                <span>Fiyat:{produtc.price}</span>
                <p>{produtc.desc}</p>
                <div className="list-icons">
                <a href="#" onClick={() => {
                  setShowModal(true);
                  setFormData(produtc);
                  }}>
                    <AiOutlineSelect className="list-icon"/>
                </a>
                <a href="#" onClick={() => {
                  setShowDeleteModal(true);
                  setRemovedProductId(produtc.id);
                  }}>
                  <AiFillDelete className="list-icon"/>
                </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
            resetForm();
          }}
        >
          <form className="form-edit" onSubmit={handleFormSubmit}>
            <div
              className={formSubmitted && formData.name === "" ? "error" : ""}
            >
              <label>Ürün Adı</label>
              <input className="search-edit"
                type="text"
                value={formData.name}
                name="name"
                onChange={handleInputChange}
              />
              {formSubmitted && formData.name === "" && <div>Zorunlu Alan</div>}
            </div>

            <hr className="modal-hr" />
            <div
              className={formSubmitted && formData.name === "" ? "error" : ""}
            >
              <label>Ürün Fotoğraf Url'i</label>
              <input className="search-edit"
                type="img"
                value={formData.img}
                name="img"
                onChange={handleInputChange}
              />
              {formSubmitted && formData.img === "" && <div>Zorunlu Alan</div>}
            </div>
            <hr className="modal-hr" />
            <div
              className={formSubmitted && formData.name === "" ? "error" : ""}
            >
              <label>Ürün Fiyatı</label>
              <input className="search-edit"
                type="text"
                value={formData.price}
                name="price"
                onChange={handleInputChange}
              />
              {formSubmitted && formData.price === "" && (
                <div>Zorunlu Alan</div>
              )}
            </div>
            <hr className="modal-hr" />
            <div
              className={formSubmitted && formData.name === "" ? "error" : ""}
            >
              <label>Ürün Açıklaması</label>
              <input className="search-edit"
                type="text"
                value={formData.desc}
                name="desc"
                onChange={handleInputChange}
              />
              {formSubmitted && formData.desc === "" && <div>Zorunlu Alan</div>}
            </div>
            <div className="button-save">
              <button type="submit">Kaydet</button>
              <button type="button"
                onClick={() => {
                  setShowModal(false);
                  setRemovedProductId("");
                }}
              >
                Vazgeç
              </button>
            </div>
          </form>
        </Modal>
      )}
      {
      showDeleteModal && (
        <Modal closeModal={() => setShowDeleteModal(false)}>
          <div className="modal-remove">
            <h3 className="a-item-01">Ürünü silmek istediğinizden emin misin?</h3>
            <div className="a-item-02">
              <button className="a-item-02-A" onClick={removeProduct}>Evet</button>
              <button className="a-item-02-A"
                onClick={() => {
                  setShowDeleteModal(false);
                  setRemovedProductId("");
                }}>
                Hayır
              </button>
            </div>
          </div>
        </Modal>
      )
      }
    </>
  );
};
export default Products;
