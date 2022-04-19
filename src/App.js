import { useEffect } from "react";
import "./styles.css";
import * as d3 from "d3";
// import { Graph } from "graphlib";
import dagreD3 from "dagre-d3";

export default function App() {
  useEffect(() => {
    const g = new dagreD3.graphlib.Graph();
    g.setGraph({ label: "routes" });

    g.setDefaultEdgeLabel(() => {
      return { rx: 10, ry: 10 };
    });

    g.setNode("name", { label: "name", url: "/name", width: 121, height: 100 });
    g.setNode("state", {
      label: "state",
      url: "/state",
      width: 121,
      height: 100
    });
    g.setNode("bizType", {
      label: "bizTyoe",
      url: "/biztype",
      width: 121,
      height: 100
    });
    g.setNode("California", {
      label: "California",
      url: "/california",
      width: 121,
      height: 100
    });
    g.setNode("Delaware", {
      label: "Delaware",
      url: "/delaware",
      width: 121,
      height: 100
    });
    g.setNode("Florida", {
      label: "Florida",
      url: "/florida",
      width: 121,
      height: 100
    });
    g.setNode("AllStates", {
      label: "AllStates",
      url: "/allstates",
      width: 121,
      height: 100
    });
    g.setNode("licenses", {
      label: "licenses",
      url: "/licenses",
      width: 121,
      height: 100
    });
    g.setNode("employees", {
      label: "Employees",
      url: "/employees",
      width: 121,
      height: 100
    });
    g.setNode("llc", { label: "LLC", url: "/llc", width: 121, height: 100 });
    g.setNode("sole", { label: "Sole", url: "/sole", width: 121, height: 100 });
    g.setNode("finish", {
      label: "Congrats",
      url: "/congrats",
      width: 121,
      height: 100
    });

    g.setEdge("name", "state");
    g.setEdge("state", "bizType");
    g.setEdge("bizType", "California");
    g.setEdge("bizType", "Delaware");
    g.setEdge("bizType", "Florida");
    g.setEdge("bizType", "AllStates");
    g.setEdge("AllStates", "licenses");
    g.setEdge("California", "licenses");
    g.setEdge("Delaware", "licenses");
    g.setEdge("Florida", "licenses");
    g.setEdge("licenses", "employees");
    g.setEdge("employees", "llc");
    g.setEdge("employees", "sole");
    g.setEdge("sole", "finish");

    g.nodes().forEach(function (v) {
      var node = g.node(v);
      // Round the corners of the nodes
      node.rx = node.ry = 10;
    });

    // Create the renderer
    const render = new dagreD3.render();

    // Set up an SVG group so that we can translate the final graph.
    const svg = d3.select("svg"),
      svgGroup = svg.append("g");

    // Run the renderer. This is what draws the final graph.
    render(d3.select("svg g"), g);

    console.log(g.graph());
    console.log(g.successors("bizType"));

    // Center the graph
    console.log(svg.attr("width"));
    var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
    console.log(xCenterOffset);
    svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
    svg.attr("height", g.graph().height + 40);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <svg id="svg-canvas" width="800" height="600" />
    </div>
  );
}
