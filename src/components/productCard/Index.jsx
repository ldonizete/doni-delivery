"use client";
import { bagCountContext } from "@/app/layout";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState, useContext } from "react";

export default function ProductCard(props) {
  const [count, setCount] = useState(0);

  const { setBagCount } = useContext(bagCountContext);

  function counterCard(data) {
    switch (data) {
      case "decremento":
        if (count > 0) {
          setCount(count - 1);
          setBagCount((curr) => curr - 1);
        }

        break;
      case "incremento":
        setCount(count + 1);
        setBagCount((curr) => curr + 1);
        break;
    }
  }

  return (
    <li>
      <Card className="mt-14 w-60 h-72 ml-6">
        <CardHeader className="relative h-24 w-24 mx-auto">
          <img src={`/assets/${props.asset}.webp`} alt={props.title} />
        </CardHeader>
        <CardBody>
          <Typography color="blue-gray" className="mb-2">
            {props.title}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            R$ {props.price}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex items-center justify-between">
          <Button onClick={() => counterCard("incremento")} color="yellow">
            +
          </Button>
          <span>{count}</span>
          <Button onClick={() => counterCard("decremento")} color="yellow">
            -
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
}
