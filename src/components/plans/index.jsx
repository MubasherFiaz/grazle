import React, { useEffect, useState } from "react";
import "./styles.css";
import calender from "../../assets/image/calender.png";
import grazle from "../../assets/image/grazleLogo.png";
import { useAuth } from "../../context/AuthProvider";
import { globalApi } from "../../apis/AuthApis";

const Plans = () => {
  const [planData, setPlanData] = useState(null);
  const { setIsLoading } = useAuth();

  const getPlanData = async () => {
    try {
      setIsLoading(true);
      const data = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/get_plan"
      );
      setPlanData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPlanData();
    };
    fetchData();
  }, []);
  console.log(planData);
  return (
    <section id="premium-plans">
      <div className="container">
        <div className="plans-heading mb-4">
          <img src={grazle} />
          <h2 className="text-center">buy grazle premium</h2>
        </div>
        <div className="row g-3 justify-content-center">
          {planData?.map((item) => (
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="plans-card">
                <div className="plans-metas mb-3">
                  <img src={calender} />
                  <span>{item.plan_name}</span>
                  <p className="m-0">${item.price}</p>
                  <span>{item.discount}% off</span>
                </div>
                <div className="plans-info">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis reiciendis omnis quibusdam
                  </p>
                  <button className="btn plans-btn">continue plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
