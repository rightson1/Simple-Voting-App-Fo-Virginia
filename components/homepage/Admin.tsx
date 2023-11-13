"use client";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGlobalTheme } from "@/utils/themeContext";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import UserStat from "@/components/homepage/UserStat";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import CustomGrid from "@/components/utils/CustomGrid";
import { pieData, sampleCandidates } from "@/constants";
import CustomPie from "@/components/utils/CustomPie";
import { useAuth } from "@/utils/AuthContext";
import { useGetCandidates } from "@/utils/hooks/useCandidates";
import { useRouter } from "next/navigation";

const Admin = () => {
  const { colors } = useGlobalTheme();
  const { user } = useAuth();
  const { data: candidates, isLoading } = useGetCandidates();
  const columns: GridColDef[] = [
    {
      field: "displayName",
      headerName: "Name",
      width: 150,
      valueGetter: (params) => {
        return params.row.user?.displayName;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      valueGetter: (params) => {
        return params.row.user?.email;
      },
    },
    {
      field: "position",
      headerName: "Position",
      width: 150,
    },
  ];

  interface GroupedCandidate {
    label: string;
    value: number;
    id: string;
  }

  const groupedCandidates: GroupedCandidate[] = candidates
    ? candidates?.reduce((acc: GroupedCandidate[], candidate) => {
        const { position, userId } = candidate;
        // Find if there's already an entry for the position in the accumulator
        const positionEntry = acc.find((entry) => entry.label === position);

        if (positionEntry) {
          // If entry exists, increment the count
          positionEntry.value += 1;
        } else {
          // If entry doesn't exist, create a new entry
          acc.push({ label: position, value: 1, id: userId });
        }
        return acc;
      }, [] as GroupedCandidate[])
    : [];
  const router = useRouter();
  return (
    <Box p={1}>
      <Box
        className="flex justify-between items-center gap-2 py-0 lg:h-[200px]"
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Box
          bgcolor={colors.card}
          p={2}
          className="flex flex-col gap-3 h-full w-full "
        >
          <Typography variant="h3">Welcome Back {user?.displayName}</Typography>
          <Typography variant="body2">
            {user.admin
              ? `   You can add a candidate by clicking the plus button and you can also
            view the list of candidates by clicking the view button`
              : `
            Welcome back, you can view the list of candidates by clicking the view button.
            We will notify you when the voting starts.
            `}
          </Typography>
          <Button
            className={`w-fit`}
            sx={{
              bgcolor: `${colors.indigo[500]} !important`,
            }}
            onClick={() =>
              router.push(user.admin ? "/candidates" : "/voter/candidates")
            }
          >
            Continue
          </Button>
        </Box>

        <UserStat />
      </Box>
      <Grid container mt={1}>
        <Grid item xs={12} md={6}>
          <CustomGrid
            columns={columns}
            rows={candidates || []}
            isLoading={isLoading}
          />
        </Grid>
        <Grid
          py={{
            xs: 1,
            md: 0,
          }}
          pl={{
            xs: 0,
            md: 1,
          }}
          item
          xs={12}
          md={6}
          className="flex items-center justify-center"
        >
          <Box
            className="w-full items-center flex-center
             h-[75vh] flex-col justify-center p-4 overflow-hidden "
            bgcolor={colors.card}
            p={1}
            py={2}
            sx={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="skyblue">
              Candidates / Position
            </Typography>
            <CustomPie pieData={groupedCandidates} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
