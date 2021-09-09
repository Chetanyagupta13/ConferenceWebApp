import React from "react";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";


import srinagar from "../../../assets/img/srinagar.jpg";
import Dallake from "../../../assets/img/dallake.jpg";
import TulipGarden from "../../../assets/img/tulipgarden.jpg";
import BotanicalGarden from "../../../assets/img/botanicalgarden.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
};

export default () => (

    <div style={{ width: "80%" }}>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    Welcome to Srinagar
                </p>
            </div>
        </div>
        <div className="row" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <Carousel {...settings}>
                            <div>
                                <img
                                    src={srinagar}
                                    alt="First slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />
                                        Somewhere, Kashmir
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={Dallake}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />
                                        DalLake, Srinagar, kashmir
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={TulipGarden}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />
                                        Tulip garden, Srinagar, kashmir
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={BotanicalGarden}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />
                                        Botanical garden, Srinagar, kashmir
                                    </h4>
                                </div>
                            </div>
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
        <div className="row">
            <ol>
                <li>
                    <p>
                        <h5>Indira Gandhi Memorial Tulip Garden</h5>
                        Indira Gandhi Memorial Tulip garden, previously Model Floriculture Center, is a tulip garden in Srinagar, Jammu and Kashmir, India. It is the largest tulip garden in Asia spread over an area of about 30 ha (74 acres).[1][2] It is situated on the foothills of Zabarwan Range with an overview of Dal Lake. The garden was opened in 2007 with the aim to boost floriculture and tourism in Kashmir Valley.[3] It was formerly known as Siraj Bagh.[4][5] About 1.5 million tulips bulbs, all in multiple colours, were brought Keukenhof tulip gardens from Amsterdam.[6] Besides there are 46 varieties of flowers, including daffodils, hyacinth and ranunculus which were also brought from Holland. The tulip Garden is home to around 65 varieties of tulips.
                    </p>
                </li>
                <li>
                    <p>
                        <h5>Shankaracharya Hill</h5>
                        Shankaracharya Hill, also called Takht-i-Sulaiman is a hill overlooking the Dal Lake and Srinagar in Jammu and Kashmir . It is famous for the sacred Shankaracharya Temple, also known as Jyeshteswara, which occupies the top of the hill. It is the destination of hundreds of tourists each day. The hill top affords a commanding view of the Kashmir Valley for tens of miles. Before 1940, the forests occurring on this hill were depleted due to the removal of fuel wood, small timber and fodder. There came a stage when this hill became virtually devoid of trees. Thereafter, a massive afforestation and rehabilation programme was taken to increase the tree cover, which was met with considerable success. Today, the Shankaracharya Hill supports a good forest cover.
                    </p>
                </li>
                <li>
                    <p>
                        <h5>Badamwari</h5>
                        The early bloom of flowers on Almond trees in the sprawling historic Badamwari garden in Shahr-e-Khaas has become a source of attraction for nature lovers and tourists, alike. Situated on foothills of Koh-e-Maran, the 300 kanals garden was dotted with trees, flowers and cascades providing a soothing experience to the visitors. Historians maintain there was no record to suggest who laid the garden but they say it existed even before the rule of Sultan Zain-ul-Abidin in the 14th century. A well covered dome in the garden is named after an Afghan ruler, Warris Shah. The bloom on the Almond trees heralded the spring. the garden was revived and formally thrown open for public in 2008.
                    </p>
                </li>
                <li>
                    <p>
                        <h5>Mughal gardens</h5>
                        Mughal gardens are a type of gardens built by the Mughals. This style was influenced by the Persian gardens particularly the Charbagh structure,[1] which is intended to create a representation of an earthly utopia in which humans co-exist in perfect harmony with all elements of nature. Significant use of rectilinear layouts are made within the walled enclosures. Some of the typical features include pools, fountains and canals inside the gardens. Afghanistan, Bangladesh, India, and Pakistan have a number of Mughal gardens which differ from their Central Asian predecessors with respect to "the highly disciplined geometry".
                    </p>
                </li>
            </ol>
        </div>
    </div>
);