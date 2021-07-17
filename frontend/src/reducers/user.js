import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import ui from "./ui";
import { API_URL } from "reusables/urls";

const initialState = {
  userId: null,
  accessToken: null,
  email: null,
  name: null,
  surname: null,
  organisation: null,
  positon: null,
  country: null,
  participationType: null,
  profilePicture: null,
  securityManagement: null,
  internationalThreats: null,
  theoreticalApproaches: null,
  humanSecurity: null,
  peaceConflict: null,
  openingSession: null,
  closingSession: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setName: (store, action) => {
      store.name = action.payload;
    },
    setSurname: (store, action) => {
      store.surname = action.payload;
    },
    setOrganisation: (store, action) => {
      store.organisation = action.payload;
    },
    setPosition: (store, action) => {
      store.positon = action.payload;
    },
    setCountry: (store, action) => {
      store.country = action.payload;
    },
    setParticipationType: (store, action) => {
      store.participationType = action.payload;
    },
  },
});

export default user;

export const fetchUser = (slug, options) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(`/users/myinformation/${slug}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(ui.actions.setLoading(false));
          });
        } else {
          dispatch(ui.actions.setLoading(false));
          dispatch(ui.actions.setErrors(data.message));
        }
      });
  };
};

export const signUPorSignIN = (slug, options) => {
  return (dispatch) => {
    console.log("slug", slug)
    dispatch(ui.actions.setLoading(true));
    fetch(API_URL(slug), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          batch(() => {
            dispatch(ui.actions.setErrors(null));
            dispatch(ui.actions.setLoading(false));
            dispatch(user.actions.setAccessToken(data.user.accessToken))
            dispatch(user.actions.setUserId(data.user.id))
          });
        } else {
          dispatch(ui.actions.setLoading(false));
          dispatch(ui.actions.setErrors({messge: data.message, error: data.error}));
          console.log(data)
        }
      });
  };
};
