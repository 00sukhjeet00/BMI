import React, { useState } from "react";
export default function CalulatorScreen() {
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    age: "",
    pic: "",
    gender: "",
    weight: "",
    height: "",
    isPergnant: false,
    bmi: "",
    classification: "",
  });
  console.log("form: ", form);
  const CalulateBMI = (e) => {
    e.preventDefault();
    if (
      form.firstName !== "" &&
      form.lastName !== "" &&
      form.age !== "" &&
      form.pic !== "" &&
      form.gender !== "" &&
      form.weight !== "" &&
      form.height !== ""
    ) {
      const bmi = Number(form.weight) / Math.pow(Number(form.height * 0.01), 2);
      let obj = { ...form };
      obj.bmi = bmi.toFixed(0).toString()
        obj.classification =bmi < 18.5
            ? "Under Weight"
            : bmi >= 18.5 && bmi <= 24.9
            ? "Normal Weight"
            : bmi >= 25 && bmi <= 29.9
            ? "Over Weight"
            : bmi >= 30.0 && bmi <= 34.9
            ? "Obesity Class 1"
            : bmi >= 35.0 && bmi <= 39.9
            ? "Obesity Class 2"
            : "Obesity Class 3"
        setform({ ...obj });
      let store = JSON.parse(localStorage.getItem("data")) || [];
      store.push(obj);
      localStorage.setItem("data", JSON.stringify(store));
      console.log("form: ", form);
    } else {
      alert("All Field Are Required");
    }
  };
  return (
    <div className="container-fluid text-center">
      <form role={"form"} className="mt-5">
        <div className="row">
          <div className="mb-3 row col-6">
            <label for="first" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="first"
                value={form.firstName}
                onChange={(e) => {
                  setform((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="mb-3 row col-6">
            <label for="pic" className="col-sm-2 col-form-label">
              Profile Pic
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                accept="image/png"
                className="form-control"
                id="pic"
                onChange={(e) => {
                  const uri = URL.createObjectURL(e.target.files[0]);
                  setform((prev) => {
                    return { ...prev, pic: uri };
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 row col-6">
            <label for="last" className="col-sm-2 col-form-label">
              Last name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="last"
                value={form.lastName}
                onChange={(e) => {
                  setform((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="mb-3 col-6 d-flex flex-row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="form-check me-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={"M"}
                checked={form.gender === "M" ? true : false}
                onChange={(e) => {
                  setform((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                M
              </label>
            </div>
            <div className="form-check me-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value={"F"}
                checked={form.gender === "F" ? true : false}
                onChange={(e) => {
                  setform((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                F
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value={"O"}
                checked={form.gender === "O" ? true : false}
                onChange={(e) => {
                  setform((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                O
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 row col-6">
            <label for="weight" className="col-sm-2 col-form-label ">
              Weight (kg)
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="weight"
                value={form.weight}
                onChange={(e) => {
                  if (e.target.value > 0 && !/[^0-9]/g.test(e.target.value))
                    setform((prev) => {
                      return { ...prev, weight: e.target.value };
                    });
                }}
              />
            </div>
          </div>
          <div className="mb-3 row col-6">
            <label for="height" className="col-sm-2 col-form-label">
              Height (cm)
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="height"
                value={form.height}
                onChange={(e) => {
                  if (e.target.value > 0 && !/[^0-9]/g.test(e.target.value))
                    setform((prev) => {
                      return { ...prev, height: e.target.value };
                    });
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 row col-6">
            <label for="age" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="age"
                value={form.age}
                onChange={(e) => {
                  if (e.target.value > 0 && !/[^0-9]/g.test(e.target.value))
                    setform((prev) => {
                      return { ...prev, age: e.target.value };
                    });
                }}
              />
            </div>
          </div>
          {form.age > 18 && form.gender == "F" && (
            <div className="form-check col-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                onChange={(e) => {
                  setform((prev) => {
                    return { ...prev, isPergnant: e.target.checked };
                  });
                }}
              />
              <label className="form-check-label" for="flexCheckChecked">
                Pergnant
              </label>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => CalulateBMI(e)}
        >
          Calculate
        </button>
      </form>

      {form.bmi.length ? (
        <div>
          <h2>{`Your Result- ${form.firstName} ${form.lastName}`}</h2>
          <h4>BMI</h4>
          <h5>{form.bmi}</h5>

          <div className="d-flex text-center justify-content-center">
            <h5>Classification</h5>
            <input type={"range"} disabled value={form.bmi} />
            <div>
              <p>Classification</p>
              <h5>{form.classification}</h5>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
