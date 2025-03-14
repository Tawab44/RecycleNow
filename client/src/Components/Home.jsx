import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box } from '@mui/material';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state?.user);
    const [loading, setLoading] = useState(!user);
//Tawab
    useEffect(() => {
        if (!user) {
            //axios.get('http://localhost:3001/user', { withCredentials: true })
            axios.get('https://recycle-now-front.vercel.app/user', { withCredentials: true })
                .then(response => {
                    if (response.data.user) {
                        setUser(response.data.user);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => navigate("/"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    return (
        <Container
            maxWidth="md"
            sx={{
                padding: '2rem',
                marginTop: '6rem', // Avoid navbar overlap
                overflowY: 'scroll',
                maxHeight: 'calc(100vh - 64px)', // Adjust height based on your navbar
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide scrollbar for webkit browsers
                },
                '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
                'scrollbar-width': 'none', // Hide scrollbar for Firefox
            }}
        >
            <Typography variant="h2" align="center" gutterBottom sx={{ paddingTop: '2rem', color: 'white' }}>
                Welcome to Recycling Helper
            </Typography>

            {/* Example of Disposal Steps */}
            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    How It Works
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Our platform makes it easy to:
                </Typography>
                <ul>
                    <li style={{ color: 'black' }}>Search for your item.</li>
                    <li style={{ color: 'black' }}>Follow our step-by-step instructions.</li>
                    <li style={{ color: 'black' }}>Dispose or recycle responsibly!</li>
                </ul>
            </Box>

            {/* Educational Content */}
            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Why Proper Disposal Matters
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Every small action counts! Learn why recycling and proper waste disposal are critical to protecting the environment.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Recycling reduces waste and conserves valuable resources.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Proper waste disposal prevents pollution and protects ecosystems.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Reducing landfill waste helps combat climate change.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Safe disposal methods improve community health and well-being.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Sustainable practices contribute to a cleaner, greener planet for future generations.
                </Typography>
            </Box>
            <Box
  sx={{
    marginY: '2rem',
    backgroundColor: '#f5f5dc',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center'
  }}
>
  <Typography
    variant="h3"
    gutterBottom
    sx={{ color: 'black', fontWeight: 'bold' }}
  >
    The 3 R's of Recycling
  </Typography>
  <Typography variant="h1" sx={{ color: 'black', display: 'inline', fontWeight: 'bold' }}>
    R&nbsp;
  </Typography>
  <Typography variant="body1" sx={{ color: 'black', display: 'inline' }}>
    Reduce: Involves minimizing consumption and making conscious choices to lower waste production. By choosing to buy less, individuals can significantly decrease the amount of waste generated, leading to less strain on the environment. This approach not only conserves valuable natural resources but also reduces energy consumption and greenhouse gas emissions associated with the production and transport of goods. Simple actions, such as opting for digital documents instead of paper, using reusable bags, and selecting products with minimal packaging, can have a substantial impact on waste reduction and promote more sustainable living.
  </Typography>
  <br />
  <Typography variant="h1" sx={{ color: 'black', display: 'inline', fontWeight: 'bold' }}>
    R&nbsp;
  </Typography>
  <Typography variant="body1" sx={{ color: 'black', display: 'inline' }}>
    Reuse:Emphasizes finding new ways to use items instead of discarding them, which extends their lifecycle and conserves resources. By repurposing or refurbishing items, individuals can minimize waste and decrease the demand for new products. Examples of reuse include transforming old glass jars into storage containers, donating unwanted clothing to thrift shops, or using cloth bags instead of single-use plastic bags. This practice not only helps reduce the volume of waste sent to landfills but also encourages creativity and resourcefulness, fostering a mindset of sustainability within communities.
  </Typography>
  <br />
  <Typography variant="h1" sx={{ color: 'black', display: 'inline', fontWeight: 'bold' }}>
    R&nbsp;
  </Typography>
  <Typography variant="body1" sx={{ color: 'black', display: 'inline' }}>
    Recycle: It is the process of converting waste materials into new products, helping to prevent waste and conserve natural resources. Recycling reduces the need for raw materials, decreases energy consumption, and lowers greenhouse gas emissions associated with manufacturing. Commonly recycled materials include paper, plastics, glass, and metals, all of which can be transformed into new products rather than being sent to landfills. Participating in local recycling programs and understanding what materials can be recycled are essential steps individuals can take to contribute to a circular economy. By prioritizing recycling, communities can significantly reduce their environmental impact and promote sustainable practices for future generations.
  </Typography>
</Box>

        </Container>
    );
}

export default Home;
