import React, { useState, useRef, useEffect } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

export default function App() {
  const chartRef = useRef(null);
  const wrapperRef = useRef(null);
  const defaultGradient = "linear-gradient(135deg, #1565c0, #42a5f5)";

  const [expandedDetails, setExpandedDetails] = useState({});
  const [optimalScale, setOptimalScale] = useState(1);

  const toggleDetails = (id) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 🗝️ Ajuste automático del scale cuando se monta y cuando resize
  useEffect(() => {
    const handleResize = () => {
      const container = wrapperRef.current;
      const chart = chartRef.current;
      if (container && chart) {
        const containerWidth = container.clientWidth;
        const chartWidth = chart.scrollWidth;
        const scale = Math.min(containerWidth / chartWidth, 1);
        setOptimalScale(scale);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🗝️ Tu data igual que antes: 
  const data = [
    {
      label: {
        id: "1",
        name: "Javier Poblete D.",
        position: "Gerente General",
        area: "Gerencia General",
        details: ["Por definir"]
      },
      expanded: true,
      children: [
        OPERACIONES(),
        CONTROL_Y_DESARROLLO(),
        COMERCIAL()
      ]
    }
  ];

  function CONTROL_Y_DESARROLLO() {
    return {
      label: {
        id: "2",
        name: "Sebastián Poblete",
        position: "Gerente de Control y Desarrollo",
        area: "Control y Desarrollo",
        details: ["Por definir"]
      },
      expanded: true,
      children: [
        {
          label: { id: "D1", dummy: true },
          expanded: true,
          children: [
            {
              label: {
                id: "3",
                name: "Miguel Walker",
                position: "Jefe de Administración y RRHH",
                area: "Administración y RRHH",
                details: ["Por definir"]
              },
              expanded: true,
              children: [
                {
                  label: {
                    id: "4",
                    name: "Marlén Muñoz",
                    position: "Administración y Cobranza",
                    area: "Administración",
                    details: ["Por definir"]
                  },
                  expanded: true,
                  children: [
                    {
                      label: {
                        id: "5",
                        name: "Jenny",
                        position: "Servicio Limpieza",
                        area: "Administración",
                        details: ["Por definir"]
                      },
                      expanded: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }

  function COMERCIAL() {
    return {
      label: {
        id: "6",
        name: "Francisco Jacob",
        position: "Gerente Comercial",
        area: "Área Comercial",
        details: ["Por definir"]
      },
      expanded: true,
      children: [
        {
          label: {
            id: "7",
            name: "Cristián Meneses",
            position: "Gerente de Ventas",
            area: "Área Comercial",
            details: ["Por definir"]
          },
          expanded: true,
          children: [
            {
              label: { id: "D2", dummy: true },
              expanded: true,
              children: [
                {
                  label: {
                    id: "8",
                    name: "Especialistas en Ventas",
                    position: "Especialistas",
                    list: ["Sue Berna", "Humberto Manaure"],
                    details: ["Por definir"]
                  },
                  expanded: true
                }
              ]
            },
            {
              label: {
                id: "9",
                name: "Pablo Mazry",
                position: "Jefe de Diseño y Arquitectura",
                area: "Área Comercial",
                details: ["Por definir"]
              },
              expanded: true
            },
            {
              label: {
                id: "10",
                name: "Andrés Pereda",
                position: "Jefe de Sucursal",
                area: "Área Comercial",
                details: ["Por definir"]
              },
              expanded: true
            }
          ]
        }
      ]
    };
  }

  function OPERACIONES() {
    return {
      label: {
        id: "11",
        name: "Javier Poblete D.",
        position: "Gerente de Operaciones",
        area: "Área de Operaciones",
        details: ["Por definir"]
      },
      expanded: true,
      children: [
        {
          label: { id: "D3", dummy: true },
          expanded: true,
          children: [
            {
              label: {
                id: "12",
                name: "Supervisores de Obra",
                position: "Supervisores",
                list: ["Mario Reveco", "Cristián Agurto", "Dalton Quiara"],
                details: ["Por definir"]
              },
              expanded: true
            }
          ]
        },
        {
          label: {
            id: "13",
            name: "Javier Poblete L.",
            position: "Jefe de Mantención y Servicio Técnico",
            area: "Área de Operaciones",
            details: ["Por definir"]
          },
          expanded: true,
          children: [
            {
              label: { id: "D4", dummy: true },
              expanded: true,
              children: [
                {
                  label: {
                    id: "14",
                    name: "Equipo de Servicio Técnico",
                    list: [
                      "Francisco Pino",
                      "Eugenio",
                      "Edwin",
                      "Ericson",
                      "Jesús",
                      "Edison",
                      "David",
                      "Marcelo",
                      "Marcial",
                      "Francisco Quezada",
                      "Madsen",
                      "Luis",
                      "Jorda",
                      "Enzo"
                    ],
                    details: ["Por definir"]
                  },
                  expanded: true
                },
                {
                  label: {
                    id: "15",
                    name: "Servicio de Mantención",
                    list: ["Cesar Soto", "Victor", "José"],
                    details: ["Por definir"]
                  },
                  expanded: true
                }
              ]
            }
          ]
        },
        {
          label: {
            id: "16",
            name: "Francisco Shnettler",
            position: "Jefe de Almacenamiento",
            area: "Área de Operaciones",
            details: ["Por definir"]
          },
          expanded: true,
          children: [
            {
              label: {
                id: "17",
                name: "Sebastián Fiedler",
                position: "Jefe de Bodega",
                area: "Área de Operaciones",
                details: ["Por definir"]
              },
              expanded: true
            }
          ]
        }
      ]
    };
  }

  const nodeTemplate = (node) => {
    const { id, name, position, area, details, list, dummy } = node.label;
    if (dummy) return <span className="dummy-node"></span>;
    const isExpanded = expandedDetails[id];

    return (
      <div
        className="node-content"
        style={{ background: defaultGradient }}
        onClick={() => details && toggleDetails(id)}
      >
        <div className="node-name">{name}</div>
        {position && <div className="node-position">{position}</div>}
        {area && <div className="node-area">{area}</div>}
        {list && (
          <ul className="node-list">
            {list.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        )}
        {details && (
          <>
            <div className={`fade ${isExpanded ? "show" : ""}`}>
              {isExpanded && (
                <ul className="node-list">
                  {details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="node-toggle">
              {isExpanded ? "Ocultar detalles" : "Ver detalles"}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="chart-container" ref={wrapperRef}>
      <TransformWrapper initialScale={optimalScale}>
        <TransformComponent>
          <div ref={chartRef}>
            <OrganizationChart
              value={data}
              nodeTemplate={nodeTemplate}
              className="company"
            />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
