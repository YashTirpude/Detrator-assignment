import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function Content() {
  return (
    <Container
      sx={{
        marginTop: 2,
        padding: 2,
        display: "flex",
        justifyContent: { sm: "flex-start" },
        alignItems: { sm: "center", md: "flex-start" },
        flexDirection: { xs: "column", sm: "column", md: "row" },
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", sm: "80%", md: "60%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        borderRadius={1}
      >
        <Card
          sx={{
            height: "100%",
            backgroundColor: "#693EFE",
            boxShadow: 3,
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            height="50%"
            image="https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-london-england.jpg"
            alt="London, England"
          />
          <CardContent sx={{ padding: 2 }}>
            <Typography
              variant="h5"
              color="white"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              London, England
            </Typography>
            <Typography variant="body2" color="white">
              This historic English city is another destination just filled with
              incredible places to visit. A trip to London is an opportunity to
              visit iconic places like the Tower Bridge, Buckingham Palace, and
              the Tower of London. Take advantage of the city being a cultural
              center as well by seeing a West End theater show or watching a
              musical performance at the Royal Albert Hall. Modern London is
              also a city of fine dining, luxury hotels, and world-class
              shopping.
            </Typography>
            <Typography variant="body2" color="white" sx={{ marginTop: 2 }}>
              Don&apos;t miss the museums, the vast British Museum is free, and
              usually quite crowded. Make time to visit The Wallace Collection,
              a free museum on Oxford Street. It has one of the world&apos;s
              greatest collections of furniture and porcelain, along with some
              important Old Master paintings.
            </Typography>
            <CardActions sx={{ marginBottom: 3 }}>
              <Button sx={{ color: "cyan", fontWeight: "bold" }}>
                READ MORE...
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "45%" },
          height: "90%",
          padding: { sm: 2 },
          marginTop: { xs: 2, md: 0 },
        }}
        borderRadius={1}
      >
        <Card
          sx={{
            height: "100%",
            backgroundColor: "#D3FE3E",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="50%"
            image="https://www.planetware.com/wpimages/2024/07/november-best-places-to-visit-jericoacoara-night.jpg"
            alt="Jericoacoara, Brazil"
          />
          <CardContent>
            <Typography
              variant="h5"
              color="black"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Jericoacoara, Brazil
            </Typography>
            <Typography variant="body2" color="black">
              Looking to truly get away from it all in November? Then consider a
              trip to the northeast corner of Brazil to the quaint little beach
              town of Jericoacoara, or Jeri as most people call it. The weather
              at this time of year is perfect for soaking up the sun, relaxing
              on the beach, and kiteboarding. This town is unique! Backed by
              endless dunes that you need to drive through in a 4-wheel-drive
              vehicle to reach the town, and fronted by a long crescent-shaped
              beach, Jeri feels like a desert oasis. The streets are sand and
              vehicles are not allowed. You can arrange transport and tours in
              dune buggies to get around and explore the area beyond town.
            </Typography>
            <CardActions sx={{ marginBottom: 3 }}>
              <Button sx={{ fontWeight: "bold" }}>READ MORE...</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
