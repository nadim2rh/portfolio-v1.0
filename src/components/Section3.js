import style from "../styles/Section3.module.css";
export default function Section3() {
  return (
    <div id="Projects" className={style.section3_container}>
      <div className={style.section3_inner}>
        <h2 className={style.s3_h2}>
          Sites & <span style={{ color: "#6d28d9" }}>Projects</span>
        </h2>
        <h4 className={style.s3_h4}>Projects that I worked on</h4>
        <div className={style.s3_grid_items}>
          <div className={`${style.s3_grid_item} ${style.item1}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>SME E-Fair</h4>
                <p>Virtual event platform</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://smeefair.com.my"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item2}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>ACBA</h4>
                <p>Books of record and awards</p>
              </div>
              <div className={style.project_btn}>
                <a href="https://aseancba.com" target="_blank" rel="noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item3}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>Money Compass</h4>
                <p>Financial media platform</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://moneycompass.com.my"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item4}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>Grand Pavilion</h4>
                <p>NFT showcase platform</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://grandpavilion.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item5}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>MC NFT</h4>
                <p>NFT showcase platform</p>
              </div>
              <div className={style.project_btn}>
                <a href="https://mcsdg.io" target="_blank" rel="noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item6}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>MMA</h4>
                <p>Aaward organizing website</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://mymalaysiaaward.com.my"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item7}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>UNIEC</h4>
                <p>Entrepreneur incubator hub</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://ulearnmoney.com/uniec"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item8}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>UNIEC Sponsor</h4>
                <p>Sponsorship collection site</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://ulearnmoney.com/sponsorship"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item9}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>MyJOBFY</h4>
                <p>Career and job platform</p>
              </div>
              <div className={style.project_btn}>
                <a href="https://myjobfy.com" target="_blank" rel="noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.s3_grid_item} ${style.item10}`}>
            <div className={style.s3_grid_item_inner}>
              <div className={style.project_details}>
                <h4>uLearnMoney</h4>
                <p>Financial education platform</p>
              </div>
              <div className={style.project_btn}>
                <a
                  href="https://ulearnmoney.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
