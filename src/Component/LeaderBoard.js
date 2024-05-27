import React from "react";
import { Link } from "react-router-dom";

function LeaderBoard() {
  return (
    <div className="text-center mt-50">
      <div>
        <div>
          <Link
            data-testid="route-rank"
            to="/rank"
            className="outlined"
            type="button"
          >
            Rank
          </Link>
          <Link
            to="/name"
            data-testid="route-name"
            className="outlined"
            type="button"
          >
            Name
          </Link>
          <Link
            to="/points"
            data-testid="route-points"
            className="outlined"
            type="button"
          >
            Points
          </Link>
          <Link
            to="/age"
            data-testid="route-age"
            className="outlined"
            type="button"
          >
            Age
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
