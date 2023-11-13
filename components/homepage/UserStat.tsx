import CheckOutlined from "@mui/icons-material/CheckOutlined";

import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useGlobalTheme } from "../../utils/themeContext";
import Box from "@mui/material/Box";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { useGetVoters } from "@/utils/hooks/useUser";
import { useGetCandidates } from "@/utils/hooks/useCandidates";
import HowToRegIcon from "@mui/icons-material/HowToReg";
const UserStat = () => {
  const { colors } = useGlobalTheme();
  const { data: voters, isLoading } = useGetVoters();
  const { data: candidates } = useGetCandidates();

  const Stat = ({
    icon,
    bgcolor,
    title,
    sub,
    border: border = true,
  }: {
    icon: React.ReactNode;
    bgcolor: string;
    title: string;
    sub: number;
    border?: boolean;
  }) => {
    return (
      <Box
        p={4}
        className="flex flex-col items-center w-full
        gap-2 justify-center"
        sx={{
          borderRight: border ? `2px solid ${colors.active}` : "none",
        }}
      >
        <Fab
          sx={{
            bgcolor: bgcolor + "!important",
            zIndex: "10 !important",
          }}
          size="medium"
        >
          {icon}
        </Fab>
        <Typography variant="h4">{title}</Typography>
        <Typography
          sx={{
            fontSize: "15px",
            color: colors.active[100],
            fontWeight: 300,
          }}
        >
          {sub}
        </Typography>
      </Box>
    );
  };
  return (
    <Box
      className="h-full w-full flex gap-2
      
       items-center "
      bgcolor={colors.card}
    >
      <Stat
        icon={<HowToVoteIcon />}
        bgcolor={colors.indigo[500]}
        title="Voters"
        sub={voters?.length || 0}
      />
      <Stat
        icon={<HowToRegIcon />}
        bgcolor={colors.green[500]}
        title="Candidates"
        sub={candidates?.length || 0}
        border={false}
      />
    </Box>
  );
};

export default UserStat;
