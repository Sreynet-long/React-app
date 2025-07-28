import { TableContainer, Table, TableHead,TableBody,TableRow,TableCell, Paper } from "@mui/material"


export default function MuiTable() {
  return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>   
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
const tableData = [{
  "id": 1,
  "first_name": "Bonita",
  "last_name": "Pays",
  "email": "bpays0@ning.com",
  "gender": "Female",
  "ip_address": "236.203.150.143"
}, {
  "id": 2,
  "first_name": "Pembroke",
  "last_name": "Locarno",
  "email": "plocarno1@seesaa.net",
  "gender": "Male",
  "ip_address": "241.192.214.54"
}, {
  "id": 3,
  "first_name": "Ariela",
  "last_name": "Hurtado",
  "email": "ahurtado2@zdnet.com",
  "gender": "Female",
  "ip_address": "59.245.121.164"
}, {
  "id": 4,
  "first_name": "Annalise",
  "last_name": "Farbrace",
  "email": "afarbrace3@github.io",
  "gender": "Female",
  "ip_address": "121.59.182.170"
}, {
  "id": 5,
  "first_name": "Glenna",
  "last_name": "Frudd",
  "email": "gfrudd4@drupal.org",
  "gender": "Non-binary",
  "ip_address": "70.67.94.227"
}, {
  "id": 6,
  "first_name": "Susi",
  "last_name": "Pavie",
  "email": "spavie5@apple.com",
  "gender": "Genderfluid",
  "ip_address": "211.101.57.150"
}, {
  "id": 7,
  "first_name": "Sullivan",
  "last_name": "Chadbourne",
  "email": "schadbourne6@github.com",
  "gender": "Male",
  "ip_address": "160.232.182.41"
}, {
  "id": 8,
  "first_name": "Chet",
  "last_name": "Blunderfield",
  "email": "cblunderfield7@toplist.cz",
  "gender": "Male",
  "ip_address": "130.215.178.122"
}, {
  "id": 9,
  "first_name": "Gwenny",
  "last_name": "Fairham",
  "email": "gfairham8@themeforest.net",
  "gender": "Female",
  "ip_address": "109.29.66.123"
}, {
  "id": 10,
  "first_name": "Fran",
  "last_name": "Moyce",
  "email": "fmoyce9@shutterfly.com",
  "gender": "Male",
  "ip_address": "82.255.233.224"
}]

