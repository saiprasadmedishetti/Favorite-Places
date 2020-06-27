import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Loader from "./Loader";
import { getSelectedPlace } from "../actions";

const Places = () => {
  // get state from store
  const place = useSelector((state) => state.AppReducer.selectedPlace);
  //   for dispatch
  const dispatch = useDispatch();

  //   get id from router
  let id = useRouteMatch().params.id;

  //   get places from api
  const getPlaces = () => {
    axios
      .get(`https://roadtrippers.herokuapp.com/api/v1/place/${id}`)
      .then((res) => res.data[0])
      .then((data) => dispatch(getSelectedPlace(data)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPlaces();
  }, [id]);

  return (
    <>
      {place.cover && (
        <div>
          <h4>Place</h4>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col banner pb-3">
                  <img
                    className="card-img-top"
                    src={place.cover}
                    alt={place.name}
                  />
                </div>
                <div className="col-md col-sm-12">
                  <h6>
                    <span className="text-muted text-label">Name </span>
                    {place.name}
                  </h6>
                  <h6>
                    <span className="text-muted text-label">Location </span>
                    {place.location}
                  </h6>
                  <h6>
                    <span className="text-muted text-label">Latitude </span>
                    {place.latitude}
                  </h6>
                  <h6>
                    <span className="text-muted text-label">Longitude </span>
                    {place.longitude}
                  </h6>
                  <h6>
                    <span className="text-muted text-label">Pincode </span>
                    {place.pincode}
                  </h6>
                  <p className="card-text">{place.official_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!place.cover && <Loader />}
    </>
  );
};

export default Places;
