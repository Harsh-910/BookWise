import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { removeFromWatchLater } from "../../services";

export function WatchLaterCard({ video }) {
  const [showList, setShowList] = useState(false);
  const { _id, title, creator, uploaded } = video;
  const { dispatch } = useData();
  const { token } = useAuth();

  return (
    <div className="card">
      <Link to={`/video/${_id}`}>
        <img className="card-img" src={`https://i.ytimg.com/vi/${_id}/0.jpg`} />
      </Link>
      <div className="card-info" title={title}>
        <div className="card-title">
          <Link to={`/video/${_id}`}>
            <h3 className="card-title-header">{title}</h3>
          </Link>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div className={`option-list ${showList ? "display-flex" : "display-none"}`}>
              <div>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
              </div>
              <div className="btn-trash" onClick={() => removeFromWatchLater(dispatch, _id, token)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                Remove from Watch Later
              </div>
            </div>
          </div>
        </div>

        <div className="card-description">
          <h3>{creator}</h3>
          <p>{uploaded}</p>
        </div>
      </div>
    </div>
  );
}
