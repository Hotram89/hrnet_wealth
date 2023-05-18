import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import { statesList, servicesList } from "../../data/data";
import { ADD_USER } from "../../features/users/usersSlice";
import BasicModal from "./Modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

export default function Form() {
  const [startdate, setStartdate] = useState(new Date());
  const [birthdate, setBirthdate] = useState(new Date());

  const [userInfos, setUserInfos] = useState({
    firstname: "",
    lastname: "",
    birthdate: birthdate.toLocaleDateString("fr"),
    StartDate: startdate.toLocaleDateString("fr"),
    street: "",
    City: "",
    state: "",
    ZipCode: "",
    department: "",
  });

  const [picker, setPicker] = useState(false);
  const [secondPicker, setSecondPicker] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(true);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleInputs = (e) => {
    if (e.target.classList.contains("firstname")) {
      const newObjState = { ...userInfos, firstname: e.target.value };
      setUserInfos(newObjState);
    } else if (e.target.classList.contains("lastname")) {
      const newObjState = { ...userInfos, lastname: e.target.value };
      setUserInfos(newObjState);
    } else if (e.target.classList.contains("zipcode")) {
      const newObjState = { ...userInfos, ZipCode: e.target.value };
      setUserInfos(newObjState);
    } else if (e.target.classList.contains("street")) {
      const newObjState = { ...userInfos, street: e.target.value };
      setUserInfos(newObjState);
    } else if (e.target.classList.contains("city")) {
      const newObjState = { ...userInfos, City: e.target.value };
      setUserInfos(newObjState);
    }
  };

  function validateTextFields(e) {
    e.preventDefault();
    if (
      userInfos.firstname.length > 1 &&
      userInfos.lastname.length > 1 &&
      userInfos.street.length > 1 &&
      userInfos.City.length > 1 &&
      userInfos.StartDate.length > 1 &&
      userInfos.birthdate.length > 1 &&
      userInfos.ZipCode.length > 1
    ) {
      dispatch(ADD_USER(userInfos));
      openModal();
    } else {
      console.log("les calculs sont pas bons");
      setErrorMsg(false);
    }
  }

  function openModal() {
    dispatch({
      type: "ADDUSER",
      payload: userInfos,
    });

    setUserInfos({
      firstname: "",
      lastname: "",
    });

    setIsOpen(false);

    navigate("/usersList");
    if (modalIsOpen === true) {
      return setIsOpen(false);
    }
    setIsOpen(true);
  }

  function handlePicker(e) {
    if (picker === true) {
      return setPicker(false);
    }
    setPicker(true);
  }

  function handleSecondPicker(e) {
    if (secondPicker === true) {
      return setSecondPicker(false);
    }
    setSecondPicker(true);
  }

  function selectstate(value) {
    const newObjState = { ...userInfos, state: value };
    setUserInfos(newObjState);
  }

  function selectdepartment(value) {
    const newObjState = { ...userInfos, department: value };
    setUserInfos(newObjState);
  }

  let newDate = birthdate.toLocaleDateString("fr");

  return (
    <form className="create-form">
      <div className="input-container">
        <label htmlFor="firstname">
          First Name{" "}
          <input
            onChange={handleInputs}
            type="text"
            placeholder="John"
            className="firstname"
          />
        </label>
        <label>
          Last Name{" "}
          <input
            onChange={handleInputs}
            type="text"
            placeholder="Smith"
            className="lastname"
          />
        </label>
        <label>
          Date of birth{" "}
          <input onClick={handlePicker} placeholder="date" value={newDate} />
          {picker ? (
            <Calendar onChange={setBirthdate} value={birthdate}></Calendar>
          ) : (
            <></>
          )}
        </label>

        <label>
          Start Date{" "}
          <input
            onClick={handleSecondPicker}
            value={startdate.toLocaleDateString("fr")}
          />
          {secondPicker ? (
            <Calendar onChange={setStartdate} value={startdate}></Calendar>
          ) : (
            <></>
          )}
        </label>

        <label>
          street{" "}
          <input onChange={handleInputs} type="text" className="street" />
        </label>
        <label>
          City <input onChange={handleInputs} type="text" className="city" />
        </label>
        <label>
          Zip Code{" "}
          <input onChange={handleInputs} type="number" className="zipcode" />
        </label>
        <label className="state-label">
          state{" "}
          <Dropdown
            value={userInfos}
            className="state-option"
            onChange={handleInputs}
            select={selectstate}
            options={statesList.state}
            placeholder={statesList.state[0]}
          />
        </label>
        <label>
          department{" "}
          <Dropdown
            className="department-option"
            options={servicesList.service}
            select={selectdepartment}
            placeholder={servicesList.service[0]}
          />
        </label>
      </div>
      <div className="errorMsg">
        <p hidden={errorMsg}>
          Veuillez valider tous les champs avant d'envoyer le formulaire
        </p>
      </div>

      <button className="btn-save" onClick={validateTextFields}>
        Save
      </button>
      {modalIsOpen ? (
        <BasicModal isOpen={() => validateTextFields}></BasicModal>
      ) : (
        <></>
      )}
    </form>
  );
}
