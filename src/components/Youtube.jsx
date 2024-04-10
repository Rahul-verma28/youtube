import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export default function Youtube() {

  return (
    <Card sx={{ bgcolor: "black", width:"100%" }}>
      <Skeleton
        sx={{ height: 190, bgcolor: "grey.900", borderRadius: 5 }}
        animation="wave"
        variant="rectangular"
      />
      <CardContent>
        <Skeleton
          animation="wave"
          height={10}
          style={{ marginBottom: 6 }}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          sx={{ bgcolor: "grey.900" }}
        />
      </CardContent>
    </Card>
  );
}
