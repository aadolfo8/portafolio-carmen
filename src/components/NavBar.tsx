import type { FC } from "react";
import styles from "./navbar.module.css";
interface Props {
  isMainPage: boolean;
}

const NavBar: FC<Props> = ({ isMainPage }) => {
  return (
    <>
      <header
        id="main-header"
        className="fixed left-0 right-0 top-0 z-50 h-[100px] md:h-[75px] w-full bg-white transition-all duration-300 ease-in-out"
      >
        <nav className="flex h-full px-4 md:px-10 justify-center">
          <div className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex-1">
              <a href="/">
                <h1 className="text-4xl font-black ">carmen puche</h1>
              </a>
            </div>
            <div className="flex-1 text-center">
              <p className="text-[17px]">/portfolio in process/</p>
            </div>
            <div className="flex-1 text-right">
              <div
                className={`${
                  isMainPage ? "flex" : "hidden"
                } flex-1 flex-row items-center justify-end gap-1`}
              >
                <svg
                  fill="#000000"
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
         s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
         c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  ></path>
                </svg>
                <h2 className="text-[17px]">creative at El Ruso de Rocky</h2>
              </div>

              <div
                className={`${
                  isMainPage ? "hidden" : "flex"
                } flex-1 items-baseline justify-end gap-[80px]`}
              >
                <a href="/">
                  <div className="flex flex-row items-center gap-1">
                    <svg
                      fill="#000000"
                      height="13px"
                      width="13px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 330 330"
                    >
                      <path
                        id="XMLID_27_"
                        d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
         s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
         c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                      ></path>
                    </svg>
                    <p className="text-[17px]">back</p>
                  </div>
                </a>
                <div className="flex justify-end items-baseline gap-3">
                  <a
                    href="https://www.linkedin.com/in/carmen-puche/"
                    className={`${styles.svggg} transition-transform duration-300 ease-in-out`}
                    target="_blank"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.00046 4.00091C3.10528 4.00091 4.00092 3.10528 4.00092 2.00046C4.00092 0.895635 3.10528 0 2.00046 0C0.895635 0 0 0.895635 0 2.00046C0 3.10528 0.895635 4.00091 2.00046 4.00091Z"
                        fill="black"
                        fillOpacity="0.8"
                      ></path>
                      <path
                        d="M5.8899 5.51681V16.6153H9.33584V11.1269C9.33584 9.67864 9.6083 8.27612 11.404 8.27612C13.1749 8.27612 13.1969 9.93189 13.1969 11.2183V16.6162H16.6446V10.5298C16.6446 7.54012 16.001 5.24252 12.5066 5.24252C10.8289 5.24252 9.7043 6.16321 9.24441 7.03452H9.19778V5.51681H5.8899ZM0.274353 5.51681H3.72578V16.6153H0.274353V5.51681Z"
                        fill="black"
                        fillOpacity="0.8"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.behance.net/carmenpuche_#"
                    className={`${styles.svggg} transition-transform duration-300 ease-in-out`}
                    target="_blank"
                  >
                    <svg
                      width="23"
                      height="14"
                      viewBox="0 0 23 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9236 0.907181H20.6272V2.2297H14.9236V0.907181ZM9.20861 6.13987C10.4694 5.56332 11.1298 4.68619 11.1298 3.33089C11.1298 0.650329 9.0428 0 6.63272 0H0V13.4547H6.81855C9.37443 13.4547 11.7731 12.2797 11.7731 9.54726C11.7731 7.85859 10.9383 6.60985 9.20861 6.13987ZM3.09336 2.29528H5.99518C7.11302 2.29528 8.1165 2.59312 8.1165 3.83366C8.1165 4.97583 7.33601 5.43489 6.22961 5.43489H3.09336V2.29528ZM6.39543 11.1704H3.0905V7.46512H6.46118C7.82203 7.46512 8.68257 8.00888 8.68257 9.38605C8.68257 10.7414 7.65621 11.1704 6.39543 11.1704ZM22.8571 8.72479C22.8571 5.84203 21.0932 3.44018 17.9026 3.44018C14.8007 3.44018 12.6908 5.67262 12.6908 8.59909C12.6908 11.6321 14.6892 13.7143 17.9026 13.7143C20.3356 13.7143 21.9108 12.6677 22.6685 10.4353H20.2012C19.9325 11.2687 18.8403 11.7059 17.9912 11.7059C16.3502 11.7059 15.4925 10.7878 15.4925 9.22756H22.8371C22.8457 9.06635 22.8571 8.89694 22.8571 8.72479ZM15.4925 7.5389C15.5812 6.25736 16.476 5.45675 17.814 5.45675C19.2206 5.45675 19.9239 6.24644 20.0468 7.5389H15.4925Z"
                        fill="black"
                        fillOpacity="0.8"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col justify-center items-center gap-2 pt-1">
            <div className="w-full text-center">
              <a href="/">
                {" "}
                <h1 className="text-4xl font-black">carmen puche</h1>
              </a>
            </div>
            <div className="w-full flex text-center flex-row gap-2">
              <div className="flex flex-row items-center gap-1">
                <svg
                  fill="#000000"
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
         s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
         c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  ></path>
                </svg>
                <h2 className="text-[14px]">creative at El Ruso de Rocky</h2>
              </div>
              <p className="text-[14px]">/portfolio in process/</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
