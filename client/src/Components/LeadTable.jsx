import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import Top3Lead from "./Top3Lead";
const leaderboardData = [
  {
    rank: 1,
    name: "John Doe",
    score: 9500,
    avatar:
      "https://imgs.search.brave.com/dsRxX9MNxgZMT4qHcqsl6IqedqonJa9yA2Ds1s3Brl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hdmF0YXItcmVz/b3VyY2luZy1jb21w/YW55XzEyNTQ5Njct/NjY1My5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
  },
  {
    rank: 2,
    name: "Jane Smith",
    score: 9400,
    avatar:
      "https://imgs.search.brave.com/f_Sh7VbSh9MImO2ZEKDmpU08em96Sb0LlTzUgwhkOzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzY0LzI5LzI4/LzM2MF9GXzc2NDI5/Mjg2MF9EYWpJMmth/NDJnT0hsYWE5VTdp/TFdIcUo2am5IN0hT/Ry5qcGc",
  },
  {
    rank: 3,
    name: "Alex Brown",
    score: 9200,
    avatar:
      "https://imgs.search.brave.com/6RvXbboJ1tna5SESu1UrAwTv408AzctDJJCEipwjufs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8zOC84OC9o/YXBweS1naXJsLWF2/YXRhci1mdW5ueS1j/aGlsZC1wcm9maWxl/LXBpY3R1cmUtdmVj/dG9yLTQxMTMzODg4/LmpwZw",
  },
  {
    rank: 4,
    name: "Emily Davis",
    score: 9100,
    avatar: "https://example.com/avatar4.png",
  },
  {
    rank: 5,
    name: "Michael Johnson",
    score: 9000,
    avatar: "https://example.com/avatar5.png",
  },
  {
    rank: 6,
    name: "Sophia Taylor",
    score: 8900,
    avatar: "https://example.com/avatar6.png",
  },
  {
    rank: 7,
    name: "Daniel Lee",
    score: 8800,
    avatar: "https://example.com/avatar7.png",
  },
  {
    rank: 8,
    name: "Olivia Martinez",
    score: 8700,
    avatar: "https://example.com/avatar8.png",
  },
  {
    rank: 9,
    name: "James Anderson",
    score: 8600,
    avatar: "https://example.com/avatar9.png",
  },
  {
    rank: 10,
    name: "Ava Wilson",
    score: 8500,
    avatar: "https://example.com/avatar10.png",
  },
  {
    rank: 11,
    name: "Lucas White",
    score: 8400,
    avatar: "https://example.com/avatar11.png",
  },
  {
    rank: 12,
    name: "Mia Harris",
    score: 8300,
    avatar: "https://example.com/avatar12.png",
  },
  {
    rank: 13,
    name: "Benjamin Clark",
    score: 8200,
    avatar: "https://example.com/avatar13.png",
  },
  {
    rank: 14,
    name: "Isabella Lewis",
    score: 8100,
    avatar: "https://example.com/avatar14.png",
  },
  {
    rank: 15,
    name: "Ethan Young",
    score: 8000,
    avatar: "https://example.com/avatar15.png",
  },
  {
    rank: 16,
    name: "Amelia King",
    score: 7900,
    avatar: "https://example.com/avatar16.png",
  },
  {
    rank: 17,
    name: "Matthew Scott",
    score: 7800,
    avatar: "https://example.com/avatar17.png",
  },
  {
    rank: 18,
    name: "Charlotte Green",
    score: 7700,
    avatar: "https://example.com/avatar18.png",
  },
  {
    rank: 19,
    name: "Henry Adams",
    score: 7600,
    avatar: "https://example.com/avatar19.png",
  },
  {
    rank: 20,
    name: "Harper Baker",
    score: 7500,
    avatar: "https://example.com/avatar20.png",
  },
  {
    rank: 21,
    name: "Elijah Hill",
    score: 7400,
    avatar: "https://example.com/avatar21.png",
  },
  {
    rank: 22,
    name: "Abigail Phillips",
    score: 7300,
    avatar: "https://example.com/avatar22.png",
  },
  {
    rank: 23,
    name: "Alexander Evans",
    score: 7200,
    avatar: "https://example.com/avatar23.png",
  },
];

export default function LeadTable() {
  const topThree = leaderboardData.slice(0, 3);
  return (
    <>
      <Top3Lead topThree={topThree}></Top3Lead>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="Leaderboard table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1E90FF", color: "#fff" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Rank
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Participant
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboardData.map((participant) => (
              <TableRow key={participant.rank}>
                <TableCell>{participant.rank}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={participant.avatar}
                      alt={participant.name}
                      sx={{ marginRight: 2 }}
                    />
                    <Typography>{participant.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{participant.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
