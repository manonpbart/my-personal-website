---
layout: ../../layouts/BlogPostLayout.astro
title: "About time? Leveraging quantum entanglement for synchronizing clocks."
date: "2026-07"
description: "Every researcher has a topic that stays in the back of their mind. Mine goes back to my undergraduate advisor, the late Dr. Jonathan Dowling, and our work on quantum clock synchronization."
---


Most researchers has a topic they've drifted away from but never stopped thinking about. Mine goes back to my undergraduate advisor, the late Dr. Jonathan Dowling, and work I did during one of my undergraduate internships, on quantum clock synchronization.

## A Brief History of Telling Time

The history of clock synchronization is quite interesting. While the system of time we use today, the sexagesimal (base-60) system of measurement, dates back to approximately 2000 BC and the Sumerians, timekeeping itself has been a staple of civilization since long before then. In Egypt, obelisks were casting shadows as primitive sun clocks as early as 3500 BC, and the Egyptian division of day and night into twelve parts each is the reason we keep a 24-hour day. Meanwhile, the Zhou Dynasty in China is believed to have used the outflow water clock around the same period. Of course, these early clocks were not synchronized with one another, each served its own local, relative purpose.

For most of human history, that was enough. But with the globalization of the modern world, it is no longer sufficient for the passage of time to be adequately measured by a local timekeeper. It has become essential to establish synchrony between distant places, to have time coordinated everywhere. Early attempts to solve this were diplomatic rather than technical: international conferences were convened where nations would disclose and coordinate their times, adjusting their standards accordingly. This deceptively simple problem, agreeing on what time it is, turns out to be a deep physical difficulty.

And this is not merely a matter of convenience. A number of modern technologies rely critically on time synchronization, and would improve significantly with better accuracy: satellite navigation, telecommunications networks, financial systems, and very long baseline interferometry, to name a few.

## The Atomic Clock

Today, atomic clocks are far more accurate than any timekeeping device that came before them. They are used to calibrate other clocks and to compute International Atomic Time. The idea of using atoms as timekeepers was first suggested by Lord Kelvin, and became practical in the 1930s with the development of magnetic resonance techniques. The modern standard is the caesium standard: since 1967, the SI second has been defined as the duration of exactly 9,192,631,770 periods of the radiation corresponding to the hyperfine transition of the ground state of the caesium-133 atom.

Now, if we strip an atomic clock down to it's most fundamental description, we can describe it as an ensemble of identical two-level quantum systems (qubits), a product state of identical vectors in Hilbert space, each prepared in an eigenstate of its Hamiltonian:

$$\hat{H}|0\rangle = E_0|0\rangle, \qquad \hat{H}|1\rangle = E_1|1\rangle, \qquad E_0 < E_1$$

An eigenstate is stationary: it does not evolve in any observable way, so an ensemble of qubits sitting in $|0\rangle$ tells no time. To start the clock, we apply a transformation that maps the stationary state into a *non-stationary* superposition. This is precisely how the Ramsey interferometry method at the heart of atomic clocks works. Applying a Hadamard transform $H$ (physically, a $\pi/2$ pulse) to $|0\rangle$ produces

$$|pos\rangle = \frac{1}{\sqrt{2}}\left(|0\rangle + |1\rangle\right)$$

which is *not* an eigenstate of the Hamiltonian. The two components accumulate phase at different rates, so the state evolves as

$$|pos(t)\rangle = \frac{1}{\sqrt{2}}\left(e^{-i\Omega t/2}|0\rangle + e^{+i\Omega t/2}|1\rangle\right), \qquad \Omega = \frac{E_1 - E_0}{\hbar}$$

The relative phase $\Omega t$ is the ticking of the clock. Measuring the ensemble in the dual basis $\{|pos\rangle, |neg\rangle\}$ yields outcome probabilities

$$P(0) = \frac{1}{2}\left(1 + \cos\Omega t\right), \qquad P(1) = \frac{1}{2}\left(1 - \cos\Omega t\right)$$

By monitoring these oscillations, the standard time can be regarded as the readout of the evolution of the state. For caesium-133, $\Omega$ corresponds to that famous 9.19 GHz hyperfine transition. 

So interestingly, even our *current* clocks fundamentally rely on quantum mechanics: superposition and phase evolution. Fittingly, this ties nicely into the history of quantum mechanics itself, which gained much of its early traction in the US through atomic, molecular, and optical technology. There is, however, a catch. In classical synchronization protocols, the accuracy of the transmitted timing information is limited by the channel over which the time is communicated. Consider the GPS satellite constellation, an engineering application that depends entirely on clock synchronization: space-borne atomic clocks must synchronize with a master clock on the ground. The fluctuating refractive index of the atmosphere causes random variations in the speed of light along the signal path, and this index fluctuation is a limiting factor of GPS precision. However accurate your clocks are, the medium between them corrupts your ability to compare them.

## Can Entanglement Synchronize Clocks?

Now, my undergraduate advisor, Dr. Dowling, and several other authors: Richard Jozsa, Daniel Abrams, and Colin Williams postulated "can we leverage quantum *entanglement* to synchronize time?"

This was an incredibly interesting question, and their answer, published in 2000 as "Quantum Clock Synchronization Based on Shared Prior Entanglement," was yes (well, maybe?) [1]. Their protocol, Quantum Clock Synchronization (QCS), works in the same spirit as Ekert's entanglement-based quantum key distribution: just as the cryptographic key does not exist until it is extracted from entangled pairs via measurement and classical communication, in QCS *no clocks exist initially*, only "entangled pre-clocks."

Here is the scheme. Alice and Bob share an ensemble of labelled singlet states:

$$|\psi^-\rangle = \frac{1}{\sqrt{2}}\left(|0\rangle_A|1\rangle_B - |1\rangle_A|0\rangle_B\right)$$

The singlet is special: it is a "dark state" that does not evolve in time (as long as both qubits undergo identical evolution), since for any single-qubit unitary $U$, we have $(U \otimes U)|\psi^-\rangle = (\det U)|\psi^-\rangle$ — a change only by an unobservable global phase. The pre-clocks are, in effect, *idling*, holding no timing information at all. Crucially, the singlet looks the same in the dual basis:

$$|\psi^-\rangle = \frac{1}{\sqrt{2}}\left(|pos\rangle_A|neg\rangle_B - |neg\rangle_A|pos\rangle_B\right)$$

To start the clocks at some time $t = 0$, Alice measures all of her qubits in the $\{|pos\rangle, |neg\rangle\}$ basis. Each pair collapses randomly, and simultaneously, at both locations, into one of two states:

$$|\psi^{I}\rangle = |pos\rangle_A|neg\rangle_B \qquad \text{or} \qquad |\psi^{II}\rangle = |neg\rangle_A|pos\rangle_B$$

with equal probability. Every qubit, on both sides, is now in a non-stationary state and begins ticking — all starting synchronously at $t = 0$ in Alice and Bob's shared rest frame. Alice's measurement has effectively performed the first Ramsey pulse on Bob's qubits, from a distance.

Now there's many sublety's here, some that were addressed by the authors in the paper, but also later on by scientists such as John Preskill and Eric Burt [1-3]. 

## Three Parties, One Time

In work I did in 2019 in Shanghai, we considered clock synchronization extended to *three* parties: Alice, Bob, and Charlie. As in the two-party protocol, the clocks all begin ticking when Alice makes her measurement, which sets the standard time $t$, known, at that moment, only to Alice. For Bob and Charlie to obtain the standard time, they too must make measurements, and the order matters: Bob measures first, followed by Charlie. Extending the protocol to multiple parties like this points toward the kind of networked time distribution that real systems would need.

Beyond being a very interesting topic, there are very practical implications. The use of prior shared entanglement allows us to bypass the intervening medium entirely: the atmosphere, or any channel imperfection, has no effect on the transmission of timing information, because no timing information is ever transmitted. Another advantage is that the parties need not know each other's locations, the synchronizing parties may be at far-distant and unknown relative locations, and the accuracy of the synchronization is unaffected by the distance of separation or by noise on the classical channel. And because the entanglement is distributed in advance while each party holds the timing information locally, the protocol carries a natural security advantage over classical methods, where the time itself must be broadcast over a vulnerable channel.

There are open problems, of course, the original authors themselves noted that distributing and purifying the required singlets without hidden simultaneity assumptions remains unresolved, as does handling parties in relative motion. While my research has since moved away from quantum communications, this remains a chapter that is still deeply interesting to me and hopefully ignites some interest in you as well! Will this problem be revisited and eventually solved?

Only time will tell.


**References:**

[1] Jozsa, R., Abrams, D.S., Dowling, J.P. and Williams, C.P., 2000. Quantum clock synchronization based on shared prior entanglement. Physical Review Letters, 85(9), p.2010.

[2] Preskill, J., 2000. Quantum clock synchronization and quantum error correction. arXiv preprint quant-ph/0010098.

[3] Burt, Eric & Ekstrom, Christopher & Swanson, Thomas. (2001). Comment on "Quantum Clock Synchronization Based on Shared Prior Entanglement". Physical Review Letters. 87. 10.1103/PhysRevLett.87.129801. 