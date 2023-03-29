import { Box, Typography, Stack } from "@pankod/refine-mui"
import { useList } from "@pankod/refine-core"
import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
} from 'components'


export const Home = () => {

    const {data, isLoading, isError} = useList({
        resource: 'properties',
        config: {
            pagination:{
                pageSize: 5
            }
        }
    })
    const latestProperties = data?.data?? []

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;
    return (
        <Box>
            <Typography fontSize={25} fontWeight={500} color="#11142D" >
                Painel
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
            <PieChart
                    title="Propriedades a venda"
                    value={684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Propriedades para alugar"
                    value={550}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total de clientes"
                    value={5684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Propriedades para Cidades"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>
            <Stack mt='25px' width='100%' direction={{xs: 'column', lg: 'row'}} gap={4}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                Últimas propriedades
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestProperties.map((property) => (
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
        
    )
}

