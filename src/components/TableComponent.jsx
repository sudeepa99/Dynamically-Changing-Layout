import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function TableContent() {
  const { t } = useTranslation();

  const tableData = [
    {
      id: 1,
      name: t("product1"),
      description: t("description1"),
      price: t("price1"),
    },
    {
      id: 2,
      name: t("product2"),
      description: t("description2"),
      price: t("price2"),
    },
    {
      id: 3,
      name: t("product3"),
      description: t("description3"),
      price: t("price3"),
    },
    {
      id: 4,
      name: t("product4"),
      description: t("description4"),
      price: t("price4"),
    },
    {
      id: 5,
      name: t("product5"),
      description: t("description5"),
      price: t("price5"),
    },
  ];
  return (
    <div>
      <TableContainer component={Paper} className="border-4 border-blue-500">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">{t("name")}"</TableCell>
              <TableCell align="right">{t("description")}</TableCell>
              <TableCell align="right">{t("price")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
