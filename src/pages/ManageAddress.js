import React, { Fragment, useEffect, useState } from "react";
import UserSiderBAr from "../shared/UserSiderBAr";
import ToggleSideBar from "../shared/ToggleSideBar";
import { globalApi } from "../apis/AuthApis";
import { useAuth } from "../context/AuthProvider";
import SavedAddress from "../components/savedAddress";
import AddressForm from "../components/addressForm";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

const ManageAddress = () => {
  const [addressData, setAddressData] = useState(null);
  const [selectedData, setSelectedAddress] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showDelModal, setShowDelModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { setIsLoading, userData, setUserData } = useAuth();

  const getAddressData = async () => {
    const formData = new FormData();
    formData.append("id", userData.id);
    try {
      setIsLoading(true);
      const data = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/get_address",
        "POST",
        formData
      );
      setAddressData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAddressData();
    };
    const storedData = JSON.parse(localStorage.getItem("login_token"));
    if (storedData) {
      setUserData(storedData?.data[0]);
    }
    fetchData();
  }, []);

  const AddAddress = async (data) => {
    const formData = new FormData();
    formData.append("user_id", userData.id);
    formData.append("name", data.firstName + data.lastName);
    formData.append("mobile", data.contactNumber);
    formData.append("address", data.address);
    formData.append("pincode", data.zipCode);
    formData.append("country", data.country);
    formData.append("city_name", data.city);
    formData.append("state", data.state);
    formData.append("type", data.type);
    try {
      setIsLoading(true);
      const response = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/add_address",
        "POST",
        formData
      );
      setIsLoading(false);
      await getAddressData();
      toast.success(response.message);
      return response.data;
    } catch (error) {
      console.error("Error creating address:", error);
      setIsLoading(false);
      toast.error(error);
      throw error;
    }
  };
  // const UpdateAddress = async (addressId, updatedAddressData) => {
  //   try {
  //     setIsLoading(true);
  //     const formData = new FormData();
  //     formData.append("id", addressId);
  //     // Add other fields to update if needed
  //     const response = await globalApi(
  //       "https://aquaconcepts78.fr/grazleBackend/api/update_address",
  //       "POST",
  //       formData
  //     );
  //     setIsLoading(false);
  //     await getAddressData();
  //     toast.success(response.message);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error updating address:", error);
  //     setIsLoading(false);
  //     toast.error(error);
  //     throw error;
  //   }
  // };
  const DeleteAddress = async (addressId) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("user_id", userData.id);
      formData.append("id", addressId);
      const response = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/delete_address",
        "POST",
        formData
      );
      setIsLoading(false);
      await getAddressData();
      toast.success(response.message);
      return response.data;
    } catch (error) {
      console.error("Error deleting address:", error);
      setIsLoading(false);
      toast.error(error);
      throw error;
    }
  };

  return (
    <div>
      <section className="our-dashbord dashbord p-0 mb-3">
        <div className="container">
          <div className="row">
            <div
              className="row d-flex justify-content-center align-items-center my-3"
              style={{
                width: "100%",
                backgroundColor: "#F8F8F8",
                color: "#909198",
                height: "40px",
              }}
            >
              Home - My Account
            </div>
            <div className="p-3">
              <ToggleSideBar />
            </div>
            <div className="col-lg-3 col-xl-3 d-none d-lg-block">
              <UserSiderBAr />
            </div>
            <div className="col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-12 mb-4">
                  {addressData?.map((item) => (
                    <Fragment key={item.id}>
                      <SavedAddress
                        palce={item.type}
                        address={item.address}
                        location={item.city}
                        name={item.name.toUpperCase()}
                        number={item.mobile}
                        onSelectAddress={() => {
                          setSelectedAddress(item.address);
                        }}
                        handleDelete={() => {
                          setDeleteId(item.id);
                          setShowDelModal(true);
                        }}
                        handleEdit={() => {
                          setEditData(item);
                          setShowEditModal(true);
                        }}
                      />
                    </Fragment>
                  ))}
                </div>
                <div className="col-12">
                  <div className="card shadow p-4">
                    <AddressForm
                      formType="Add New Address"
                      handleClick={(values) => {
                        AddAddress(values);
                      }}
                      buttonText="Add New"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={showEditModal}
        onHide={() => {
          setShowEditModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddressForm
            formType="Edit Address"
            handleClick={(values) => {
              // UpdateAddress(values);
              console.log(values);
            }}
            initialValues={editData}
            buttonText="Update"
          />
        </Modal.Body>
      </Modal>
      <Modal
        show={showDelModal}
        onHide={() => {
          setShowDelModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure yo want to Delete Address !</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowDelModal(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              DeleteAddress(deleteId);
              setShowDelModal(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageAddress;
