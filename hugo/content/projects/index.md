---
title: "Projects"
url: "/and-creates/"
summary: projects
---

### [DISCO -- LLVM pass for detecting string formatting issues](https://github.com/davis-matthew/DISCO)

{{< image-and-text image="/llvm-pass.png" alt="pfind" >}}
DISCO is a dependently typed string and runtime LLVM compiler pass that detects string formatting issues, such as typos. Whenever a string deviates from the expected pattern, the runtime will identify this as a mismatch. This helps reduce usability issues arising from cultural variations in input and output validation.

Here is the [paper](https://github.com/davis-matthew/DISCO/blob/main/assets/final-report.pdf) with more details.
{{< /image-and-text >}}

### [pfind -- Parallel Implementantion of Linux find command](https://github.com/kshpdr/pfind)

{{< image-and-text image="/pfind.png" alt="pfind" >}}
In this project, we developed a parallel implementation of the `find` command using OpenMP. We also implemented a sequential version of the `find` command for comparison purposes, benchmarked our parallel implementation against the sequential one, and evaluated the performance difference.

Here is the [paper](https://github.com/kshpdr/pfind/blob/main/paper.pdf) and [presentation slides](https://github.com/kshpdr/pfind/blob/main/presentation.pdf) with more details.
{{< /image-and-text >}}


### [SVF-Based Reachability Analysis in LLVM IR](https://github.com/kshpdr/reachability-analysis)

{{< image-and-text image="/project-1.png" alt="SVF-Based Reachability Analysis" >}}
In this project, we developed a tool for static reachability analysis using the SVF framework and LLVM IR. We analyze LLVM IR files to statically determine if a function call `src()` can reach another function call `sink()`. We generate an interprocedural control-flow graph (ICFG) of a program, which maps control instructions from program entry to exit, and use it for eliminating dead code.
{{< /image-and-text >}}

---

### [Heuristic Solver for Twin-Width](https://github.com/kshpdr/twin-width-heuristics)

{{< image-and-text image="/project-2.png" alt="SVF-Based Reachability Analysis" >}}
In my undergraduate thesis, I investigated various methods for effectively addressing the [Twin-Width problem](https://en.wikipedia.org/wiki/Twin-width). I created several heuristics along with a dedicated solver, conducted performance benchmarks on them, and assessed the outcomes by examining how these heuristics performed across diverse graph types.

Here are the [slides](https://koshelev.works/thesis-slides.pdf) from the defense presentation.
{{< /image-and-text >}}

---

### [Federated Marketplaces](https://github.com/orgs/ADSP-Project/repositories)

{{< image-and-text image="/project-3.png" alt="SVF-Based Reachability Analysis" >}}
As part of the Distributed System Prototyping class at TU Berlin, we developed a prototype for a federated marketplace. This is akin to Mastodon but in the Amazon world. I developed multiple components allowing shops based on microservice architecture to easily integrate our solution and collaborate with other shops. 

Here are the [slides](https://koshelev.works/federated-marketplace-slides.pdf) from the final presentation.
{{< /image-and-text >}}

---

### [Vertex Cover Solver](https://github.com/kshpdr/vertex-cover-solver)

{{< image-and-text image="/project-4.png" alt="SVF-Based Reachability Analysis" >}}
This project is a collection of algorithms and heuristics for solving the [Vertex Cover](https://en.wikipedia.org/wiki/Vertex_cover) problem. We explored and implemented state-of-the-art approaches of solving vertex cover, including reduction rules, branch-and-reduce algorithm with packing constraints and automated parameter optimization techniques with parallel algorithm configuration.
{{< /image-and-text >}}

--- 

### [Findbotel](https://github.com/kshpdr/findbotel)

{{< image-and-text image="/project-5.jpeg" alt="SVF-Based Reachability Analysis" >}}
This project was implemented within two weeks as part of the application for the [GenDev scholarship](https://www.talents.check24.de/en/gendev) for talented computer science students. It is a Telegram bot that enables users to find and directly book package tours within the messenger. The project includes optimized search over a large dataset (15GB+, 100+ million entries), payment integration, and pagination development.
{{< /image-and-text >}}

---

### [MTS](https://github.com/kshpdr/mts)

{{< image-and-text image="/project-6.jpeg" alt="SVF-Based Reachability Analysis" >}}
This Telegram bot represents the module catalogue at the Technical University of Berlin. Since finding any module required more than 5 clicks, I decided to port it to the messenger to make life easier. This project includes the implementation of a parser, pagination, and a custom review system for the classes.
{{< /image-and-text >}}