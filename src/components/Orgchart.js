import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const orgchart = () => {
  return (
    <div className="my-10 px-10 mx-auto overflow-x-auto">
      <Tree
        label={
          <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
            Commissioner of Police
          </div>
        }
        lineColor={"#0245A7"}
        lineWidth={"2px"}
        lineHeight={"30px"}
      >
        <TreeNode
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              Addl. Commissioner of Police
            </div>
          }
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                DCP Zone 1
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                DCP Zone 2
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                DCP Zone 3
              </div>
            }
          ></TreeNode>{" "}
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                DCP H.Q.
              </div>
            }
          ></TreeNode>
        </TreeNode>
      </Tree>
      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              Zone 1
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                ACP Pimpri
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Pimpri Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Bhosari Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Sangvi Police Station
                </div>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                ACP Chichwad
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Chichwad Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Nigdi Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Ravet Police Station
                </div>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </div>

      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              Zone 2
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                ACP Dehuraod
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Talegoan MIDC Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Talegoan Dabhade Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Dehuroad Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Shirgoan - Parandwadi Police Station
                </div>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                ACP Wakad
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Wakad Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Hinjewadi Police Station
                </div>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </div>

      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              Zone 3
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                ACP Chakan
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Chakan Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Mahalunge MIDC Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Alandi Police Station
                </div>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                ACP Bhosari MIDC
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Dighi Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Bhosari MIDC Police Station
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                  Chikhali Police Station
                </div>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </div>

      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              DCP H.Q.
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                ACP Crime
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                ACP Crime 1
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                ACP Traffic
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                ACP S.B.
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  Special Branch
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  Passport Branch
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  Verification Branch
                </div>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                ACP Admin
              </div>
            }
          >
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  HQ
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  M.T.
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  Wireless
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                  Wellfare
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="p-2 border-2 border-[#0245A7] inline-block w-32 bg-[#0245A7] text-white">
                  Ministerial Staff Administration
                </div>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </div>

      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              ACP Crime
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Unit 1
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Unit 2
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Unit 3
              </div>
            }
          ></TreeNode>{" "}
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Unit 4
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Unit 5
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                AHTU
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Anti Extortion Cell
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Cyber Cell
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                CCTNS / Comp Branch
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                EOW
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                TAW
              </div>
            }
          ></TreeNode>
        </Tree>
      </div>

      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              ACP Crime 1
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                Anti Dacoity Cell
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                Anti Narcotic Cell
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                Anti Weapon Cell
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                PCB / MOB
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                Woman Cell
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
                Senior Citizen
              </div>
            }
          ></TreeNode>
        </Tree>
      </div>

      <div className="mt-20">
        <Tree
          label={
            <div className="p-2 border-2 border-[#0245A7] inline-block w-36 bg-[#0245A7] text-white">
              ACP Traffic
            </div>
          }
          lineColor={"#0245A7"}
          lineWidth={"2px"}
          lineHeight={"30px"}
        >
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Dighi Alandi Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Chichwad Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Pimpri Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Bhosari Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Sangvi Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Talwade Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Chakan Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Dehuroad Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Hinjwadi Traffic Division
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="p-2 border-2 border-[#0245A7] inline-block w-24 bg-[#0245A7] text-white">
                Nigdi Traffic Division
              </div>
            }
          ></TreeNode>
        </Tree>
      </div>
    </div>
  );
};

export default orgchart;
