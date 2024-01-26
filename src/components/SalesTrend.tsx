import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Select,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  HighchartsChart,
  HighchartsProvider,
  Chart as ReactChart,
  XAxis,
  YAxis,
  ColumnSeries,
  Tooltip,
} from "react-jsx-highcharts";
import Highcharts from "highcharts";

const SalesTrend = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const priceOnChart = [
    4000, 35000, 29000, 15000, 48000, 31000, 13700, 19000, 33000, 6000, 17000,
    1900,
  ];

  return (
    <Flex
      m={7}
      direction="column"
      minW="350px"
      px={5}
      py={4}
      w={{ xl: "806px", base: "full" }}
      flex={1}
      h="374px"
      color={colorMode === "light" ? "black" : "black"}
      flexShrink={0}
      borderRadius={"14px"}
      border={"1px solid #EDF2F7"}
      background={"#FFF"}
      pos="relative"
    >
      <Flex mb="10px" justify="space-between">
        <Heading
          fontWeight="semibold"
          fontSize="18px"
          lineHeight="26px"
          color="#26282C"
        >
          GeegPay Users Trend
        </Heading>
        <HStack gap="10px">
          <Text as="span" fontWeight="medium" color="secondary" fontSize="14px">
            Sort by:
          </Text>
          <Button
            variant="ghost"
            colorScheme="appGray"
            color="secondary"
            rounded="full"
            px={3}
            py="6px"
            gap="10px"
            border="1px"
            h={8}
            borderColor="#E1DFDF"
          >
            <Text fontSize="12px" as="span">
              Monthly
            </Text>{" "}
          </Button>
        </HStack>
      </Flex>

      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart
          plotOptions={{
            column: {
              clip: false,
            },
          }}
        >
          <Tooltip
            headerFormat=""
            backgroundColor="#000"
            borderRadius={5}
            style={{
              color: "white",
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "var(--font-jakarta)",
            }}
            valuePrefix="$"
            useHTML
            pointFormat="<b style='padding:5px 15px;font-size:12px;font-weight:500;height:26px'>{tooltip.valuePrefix}{point.y}</b>"
          />
          <ReactChart
            style={{ flex: 1 }}
            height="312px"
            spacingLeft={4}
            spacingRight={4}
            spacingBottom={13}
          />
          <XAxis
            lineWidth={0}
            labels={{
              style: {
                fontFamily: "var(--font-jakarta)",
                fontWeight: "600",
                fontSize: "14px",
                color: "#525252",
              },
            }}
            categories={months}
          >
            <XAxis.Title></XAxis.Title>
          </XAxis>
          <YAxis
            tickInterval={5000}
            tickPositions={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
            gridLineWidth={1}
            gridLineDashStyle="ShortDash"
            gridLineColor="#EAEAEA"
          >
            <ColumnSeries
              name=""
              point={{
                events: {
                  mouseOver: function () {
                    this.update(
                      {
                        color: {
                          linearGradient: {
                            x1: 0,
                            x2: 0,
                            y1: 0,
                            y2: 1,
                          },
                          stops: [
                            [0, "rgba(52, 202, 165, 1)"],
                            [1, "rgba(52, 202, 165, 0.1)"],
                          ],
                        },
                      },
                      false,
                    );

                    this.series.points.forEach((point) => {
                      if (point !== (this as any)) {
                        point.update(
                          {
                            color: "rgba(52, 202, 165, 0.12)",
                          },
                          false,
                        );
                      }
                    }, this);

                    this.series.chart.redraw();
                  },
                  mouseOut: function () {
                    this.series.points.forEach(function (point) {
                      return point.update({});
                    });

                    this.series.chart.redraw();
                  },
                },
              }}
              pointWidth={30}
              color="#34CAA5"
              borderRadius="50px"
              borderWidth={0}
              data={priceOnChart}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </Flex>
  );
};

export default SalesTrend;
