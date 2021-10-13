//scripting of connectors begin
var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {
    var instance,
        discs = [],
        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },
        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },
        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }   
            });
        },
 
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        
       
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },

        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare4 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        
       
        endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#59981A" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare5 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare6= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint6);
        },

        endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare7 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare8= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint88 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare88= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint88);
        },


 endpoint33 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare33 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint33);
        },
        
       
        endpoint31 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare31 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint31);
        },
        endpoint32 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare32 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint32);
        },

        endpoint34 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare34 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint34);
        },
        
       
        endpoint35 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#59981A" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare35 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint35);
        },
        endpoint36 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare36= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint36);
        },

        endpoint37 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare37 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint37);
        },
        endpoint38 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare38= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint38);
        },
        endpoint388 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare388= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint388);
        },


























         endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },


            endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint19 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare19= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint19);
        },


        endpoint91 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare91= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint91);
        },


            endpoint101 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare101 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint101);
        },
        endpoint191 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare191= function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint191);
        },


















        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare11 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare12 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare13 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint13);
        },

        endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare14 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint14);
        },
        endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare15 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint15);
        },
        endpoint16 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare16 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint16);
        },

         endpoint17 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare17 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint17);
        },
        endpoint18 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare18 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint18);
        },
       endpoint818 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare818 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint818);
        },


        endpoint111 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare111 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint111);
        },
        endpoint121 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare121 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint121);
        },
        endpoint131 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#59981A" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare131 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint131);
        },

        endpoint141 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare141 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint141);
        },
        endpoint151 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare151 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint151);
        },
        endpoint161 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare161 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint161);
        },

         endpoint171 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare171 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint171);
        },
        endpoint181 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare181 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint181);
        },
    endpoint1818 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1818 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1818);
        },





       
// this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };
 // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
          Endpoint: [ "Image", { url: "littledot.png" } ], 
        Connector: [ "Bezier", { curviness: -70 } ],
        Container: "canvas"
    });
 // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),       
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e88 = prepare88("ld88"),

            e33 = prepare33("ld33"),       
            e31 = prepare31("ld31"),
            e32 = prepare32("ld32"),
            e34 = prepare34("ld34"),       
            e35 = prepare35("ld35"),
            e36 = prepare36("ld36"),
            e37 = prepare37("ld37"),
            e38 = prepare38("ld38"),
            e388 = prepare388("ld388"),










            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e19 = prepare19("ld19"),

            e91 = prepare91("ld91"),
            e101 = prepare101("ld101"),
            e191 = prepare191("ld191"),




            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare15("ld15"),
            e16 = prepare16("ld16"),
            e17 = prepare17("ld17"),
            e18 = prepare18("ld18"),
            e818 = prepare818("ld818"),


            e111 = prepare111("ld111"),
            e121 = prepare121("ld121"),
            e131 = prepare131("ld131"),
            e141 = prepare141("ld141"),
            e151 = prepare151("ld151"),
            e161 = prepare161("ld161"),
            e171 = prepare171("ld171"),
            e181 = prepare181("ld181"),
            e1818 = prepare1818("ld1818"),
           














           
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");
         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });
            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });   
    });
    jsPlumb.fire("jsPlumbDemoLoaded", instance);
document.getElementById("check-button").addEventListener("click", function () {
      
        var correct_connections_1_31 = [
            {
                "source": "ld1",
                "target": "ld31"
            },
            {
                "source": "ld31",
                "target": "ld1"
            }
        ];
        var correct_connections_2_32 = [
            {
                "source": "ld2",
                "target": "ld32"
            },
            {
                "source": "ld32",
                "target": "ld2"
            }
        ];
        var correct_connections_3_33 = [
            {
                "source": "ld3",
                "target": "ld33"
            },
            {
                "source": "ld33",
                "target": "ld3"
            }
        ];

        var correct_connections_4_34 = [
            {
                "source": "ld4",
                "target": "ld34"
            },
            {
                "source": "ld34",
                "target": "ld4"
            }
        ];
        var correct_connections_5_35 = [
            {
                "source": "ld5",
                "target": "ld35"
            },
            {
                "source": "ld35",
                "target": "ld5"
            }
        ];
        var correct_connections_6_37 = [
            {
                "source": "ld6",
                "target": "ld37"
            },
            {
                "source": "ld37",
                "target": "ld6"
            }
        ];

        var correct_connections_7_36 = [
            {
                "source": "ld7",
                "target": "ld36"
            },
            {
                "source": "ld36",
                "target": "ld7"
            }
        ];
        var correct_connections_8_38 = [
            {
                "source": "ld8",
                "target": "ld38"
            },
            {
                "source": "ld38",
                "target": "ld8"
            }
        ];
        var correct_connections_88_388 = [
            {
                "source": "ld88",
                "target": "ld388"
            },
            {
                "source": "ld388",
                "target": "ld88"
            }
        ];
       



        var correct_connections_9_91 = [
            {
                "source": "ld9",
                "target": "ld91"
            },
            {
                "source": "ld91",
                "target": "ld9"
            }
        ];
        var correct_connections_10_101 = [
            {
                "source": "ld10",
                "target": "ld101"
            },
            {
                "source": "ld101",
                "target": "ld10"
            }
        ];
        var correct_connections_19_191 = [
            {
                "source": "ld19",
                "target": "ld191"
            },
            {
                "source": "ld191",
                "target": "ld19"
            }
        ];










        var correct_connections_11_111 = [
            {
                "source": "ld11",
                "target": "ld111"
            },
            {
                "source": "ld111",
                "target": "ld11"
            }
        ];
        var correct_connections_12_121 = [
            {
                "source": "ld12",
                "target": "ld121"
            },
            {
                "source": "ld121",
                "target": "ld12"
            }
        ];
        var correct_connections_13_131 = [
            {
                "source": "ld13",
                "target": "ld131"
            },
            {
                "source": "ld131",
                "target": "ld13"
            }
        ];

         var correct_connections_14_141 = [
            {
                "source": "ld14",
                "target": "ld141"
            },
            {
                "source": "ld141",
                "target": "ld14"
            }
        ];
        var correct_connections_15_151 = [
            {
                "source": "ld15",
                "target": "ld151"
            },
            {
                "source": "ld151",
                "target": "ld15"
            }
        ];
        var correct_connections_16_171 = [
            {
                "source": "ld16",
                "target": "ld171"
            },
            {
                "source": "ld171",
                "target": "ld16"
            }
        ];

        var correct_connections_17_161 = [
            {
                "source": "ld17",
                "target": "ld161"
            },
            {
                "source": "ld161",
                "target": "ld17"
            }
        ];
        var correct_connections_18_181 = [
            {
                "source": "ld18",
                "target": "ld181"
            },
            {
                "source": "ld181",
                "target": "ld18"
            }
        ];
        
        var correct_connections_818_1818 = [
            {
                "source": "ld818",
                "target": "ld1818"
            },
            {
                "source": "ld1818",
                "target": "ld818"
            }
        ];





   
        var allowed_connections = [
           
            {
                "source": "ld1",
                "target": "ld31"
            },
            {
                "source": "ld31",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld32"
            },
            {
                "source": "ld32",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld33"
            },
            {
                "source": "ld33",
                "target": "ld3"
            },

            {
                "source": "ld4",
                "target": "ld34"
            },
            {
                "source": "ld34",
                "target": "ld4"
            },
            {
                "source": "ld5",
                "target": "ld35"
            },
            {
                "source": "ld35",
                "target": "ld5"
            },
            {
                "source": "ld6",
                "target": "ld37"
            },
            {
                "source": "ld37",
                "target": "ld6"
            },

            {
                "source": "ld7",
                "target": "ld36"
            },
            {
                "source": "ld36",
                "target": "ld7"
            },
            {
                "source": "ld8",
                "target": "ld38"
            },
            {
                "source": "ld38",
                "target": "ld8"
            },
            {
                "source": "ld88",
                "target": "ld388"
            },
            {
                "source": "ld388",
                "target": "ld88"
            },








            {
                "source": "ld9",
                "target": "ld91"
            },
            {
                "source": "ld91",
                "target": "ld9"
            },
            {
                "source": "ld10",
                "target": "ld101"
            },
            {
                "source": "ld101",
                "target": "ld10"
            },
            {
                "source": "ld19",
                "target": "ld191"
            },
            {
                "source": "ld191",
                "target": "ld19"
            },










            {
                "source": "ld11",
                "target": "ld111"
            },
            {
                "source": "ld111",
                "target": "ld11"
            },
            {
                "source": "ld12",
                "target": "ld121"
            },
            {
                "source": "ld121",
                "target": "ld12"
            },
            {
                "source": "ld13",
                "target": "ld131"
            },
            {
                "source": "ld131",
                "target": "ld13"
            },
            {
                "source": "ld14",
                "target": "ld141"
            },
            {
                "source": "ld141",
                "target": "ld14"
            },
            {
                "source": "ld15",
                "target": "ld151"
            },
            {
                "source": "ld151",
                "target": "ld15"
            },
            {
                "source": "ld16",
                "target": "ld171"
            },
            {
                "source": "ld171",
                "target": "ld16"
            },
            {
                "source": "ld17",
                "target": "ld161"
            },
            {
                "source": "ld161",
                "target": "ld17"
            },
            {
                "source": "ld18",
                "target": "ld181"
            },
            {
                "source": "ld181",
                "target": "ld18"
            },
            {
                "source": "ld818",
                "target": "ld1818"
            },
            
            {
                "source": "ld1818",
                "target": "ld818"
            },
            


          
         ];
         var actual_connections = instance.getAllConnections();
       
        var is_connected_1_31 = false;
        var is_connected_2_32 = false;
        var is_connected_3_33 = false;
        var is_connected_4_34 = false;
        var is_connected_5_35 = false;
        var is_connected_6_37 = false;
        var is_connected_7_36 = false;
        var is_connected_8_38 = false;
        var is_connected_88_388 = false;


        var is_connected_9_91 = false;
        var is_connected_10_101 = false;
        var is_connected_19_191 = false;


        var is_connected_11_111 = false;
        var is_connected_12_121 = false;
        var is_connected_13_131 = false;
        var is_connected_14_141 = false;
        var is_connected_15_151 = false;
        var is_connected_16_171 = false;
        var is_connected_17_161 = false;
        var is_connected_18_181 = false;
        var is_connected_818_1818 = false;
        
        var unallowed_connection_present = false;
     
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_1_31){
                is_connected_1_31 = correct_connections_1_31 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_2_32){
                is_connected_2_32 = correct_connections_2_32 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_3_33){
                is_connected_3_33 = correct_connections_3_33.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
        };
        if(!is_connected_4_34){
                is_connected_4_34 = correct_connections_4_34 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_5_35){
                is_connected_5_35 = correct_connections_5_35 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_6_37){
                is_connected_6_37 = correct_connections_6_37 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_7_36){
                is_connected_7_36 = correct_connections_7_36 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_8_38){
                is_connected_8_38 = correct_connections_8_38 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            if(!is_connected_88_388){
                is_connected_88_388 = correct_connections_88_388 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }



        });





        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

             if(!is_connected_9_91){
                is_connected_9_91 = correct_connections_9_91 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
 if(!is_connected_10_101){
                is_connected_10_101 = correct_connections_10_101 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_19_191){
                is_connected_19_191 = correct_connections_19_191 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });






        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

 if(!is_connected_11_111){
                is_connected_11_111 = correct_connections_11_111 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_12_121){
                is_connected_12_121 = correct_connections_12_121 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_13_131){
                is_connected_13_131 = correct_connections_13_131 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_14_141){
                is_connected_14_141 = correct_connections_14_141 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_15_151){
                is_connected_15_151 = correct_connections_15_151 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_16_171){
                is_connected_16_171 = correct_connections_16_171 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_17_161){
                is_connected_17_161 = correct_connections_17_161 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
             if(!is_connected_18_181){
                is_connected_18_181 = correct_connections_18_181 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            if(!is_connected_818_1818){
                is_connected_818_1818 = correct_connections_818_1818 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
       
    



       
        if ( is_connected_1_31&&is_connected_2_32&&
            is_connected_3_33&&is_connected_4_34&&
            is_connected_5_35&&is_connected_6_37&&
            is_connected_7_36&&is_connected_8_38&&
            is_connected_88_388&&is_connected_9_91&&
            is_connected_10_101&&is_connected_19_191&&
            is_connected_11_111&&is_connected_12_121&&
            is_connected_13_131&&is_connected_14_141&&
            is_connected_15_151&&is_connected_16_171&&
            is_connected_17_161&&is_connected_18_181&&is_connected_818_1818&& !unallowed_connection_present) {
            alert("correct connection");
            rightconnection=true;
           
            document.getElementById("imgg").style.display = "block";
            document.getElementById("img1").style.display = "block";
            return;
            }
        else if(!unallowed_connection_present){
                               alert("Please complete connection");
                               }
            else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});

//Scripting of connectors ends


