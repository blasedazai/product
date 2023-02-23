import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineSelect } from "react-icons/ai";
import Modal from "../modal/modal";

const Categories = () => {
  const categoriesFormData = {
    id: "",
    name: "",
    img: [],
  };

  const [formData, setFormData] = useState(categoriesFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [categorieList, setCategorieList] = useState([
    {
      id: "1",
      name: "Telefon",
      img: "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "2",
      name: "Bilgisayar",
      img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: "3",
      name: "Kulaklık",
      img: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
    {
      id: "4",
      name: "Aksesuar",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104?wid=890&hei=740&fmt=jpeg&qlt=90&.v=1617761672000",
    },
    {
      id: "5",
      name: "Tablet",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210_GEO_TR?wid=728&hei=666&fmt=png-alpha&.v=1665507045406",
    },
    {
      id: "6",
      name: "Akıllı Saat",
      img: "https://images.unsplash.com/photo-1434494817513-cc112a976e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "7",
      name: "Bisiklet",
      img: "https://images.unsplash.com/photo-1663484366539-96c5ab8ab07a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: "8",
      name: "Konsol",
      img: "https://images.unsplash.com/photo-1531525727990-67532cd332c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnNvbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [removedCategorieId, setRemovedCategorieId] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formData.name && formData.img) {
      if (formData.id === "") {
        setCategorieList([
          ...categorieList,
          {
            ...formData,
            id: categorieList.length,
          },
        ]);
      } else {
        let _categorieList = [...categorieList];
        const index = categorieList.findIndex((x) => x.id === formData.id);
        _categorieList[index] = formData;
        setCategorieList(_categorieList);
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
    setFormData(categoriesFormData);
    setFormSubmitted(false);
  };

  const removeCategorie = () => {
    setCategorieList([...categorieList.filter((x) => x.id !== removedCategorieId),
    ]);
    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (categorieList.length > 8) {
      localStorage.setItem("categorieList", JSON.stringify(categorieList));
    }
  }, [categorieList]);

  useEffect(() => {
    if (localStorage.getItem("categorieList")) {
      setCategorieList(JSON.parse(localStorage.getItem("categorieList")));
    }
  }, []);
  return (
    <>
      <div className="categories">
        <div className="header-01">
          <h3>Kategori Listesi</h3>
          <button onClick={() => setShowModal(true)}>Kategori Ekle</button>
        </div>
        <div className="categorie">
          {categorieList.map((categorie) => (
            <div className="categorie-card" key={categorie.id}>
              <img src={categorie.img} />
              <h5>{categorie.name}</h5>
              <div className="c-card-icon">
                <a
                  onClick={() => {
                    setShowModal(true);
                    setFormData(categorie);
                  }}
                >
                  <AiOutlineSelect className="categorie-icon" />
                </a>
                <a
                  onClick={() => {
                    setShowDeleteModal(true);
                    setRemovedCategorieId(categorie.id);
                  }}
                >
                  <AiFillDelete className="categorie-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
        >
          <form className="categorie-form" onSubmit={handleFormSubmit}>
            <div
              className={formSubmitted && formData.name === "" ? "error" : ""}
            >
              <label>Ürün Adı</label>
              <input
                type="text"
                value={formData.name}
                name="name"
                onChange={handleInputChange}
              />
              {formSubmitted && formData.name === "" && <div>Zorunlu Alan</div>}
            </div>
            <div
              className={formSubmitted && formData.img === "" ? "error" : ""}
            >
              <label>Kategori Görselinin Url'i</label>
              <input
                type="text"
                value={formData.img}
                name="img"
                onChange={handleInputChange}
              />
              {formSubmitted && formData.img === "" && <div>Zorunlu Alan</div>}
            </div>
            <div className="button-save">
              <button type="submit">Kaydet</button>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  removeCategorie("");
                }}
              >
                Vazgeç
              </button>
            </div>
          </form>
        </Modal>
      )}
      {showDeleteModal && (
        <Modal closeModal={() => setShowDeleteModal(false)}>
          <div className="modal-remove">
            <h3 className="a-item-01">
              Kategoriyi silmek istediğinizden emin misiniz?
            </h3>
            <div className="a-item-02">
              <button className="a-item-02-A" onClick={removeCategorie}>
                Sil
              </button>
              <button className="a-item-02-A"
                onClick={() => {
                  setShowDeleteModal(false);
                  setRemovedCategorieId("");
                }}
              >
                Vazgeç
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Categories;
