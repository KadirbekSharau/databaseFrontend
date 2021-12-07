--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country (
    cname character varying(50) NOT NULL,
    population bigint
);


ALTER TABLE public.country OWNER TO postgres;

--
-- Name: discover; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.discover (
    cname character varying(50) NOT NULL,
    disease_code character varying(50) NOT NULL,
    first_enc_date date
);


ALTER TABLE public.discover OWNER TO postgres;

--
-- Name: disease; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disease (
    disease_code character varying(50) NOT NULL,
    pathogen character varying(20),
    description character varying(140),
    id integer
);


ALTER TABLE public.disease OWNER TO postgres;

--
-- Name: diseasetype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diseasetype (
    id integer NOT NULL,
    description character varying(140)
);


ALTER TABLE public.diseasetype OWNER TO postgres;

--
-- Name: doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctor (
    email character varying(60) NOT NULL,
    degree character varying(20)
);


ALTER TABLE public.doctor OWNER TO postgres;

--
-- Name: publicservant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publicservant (
    email character varying(60) NOT NULL,
    department character varying(50)
);


ALTER TABLE public.publicservant OWNER TO postgres;

--
-- Name: record; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.record (
    email character varying(60) NOT NULL,
    cname character varying(50) NOT NULL,
    disease_code character varying(50) NOT NULL,
    total_deaths integer,
    total_patients integer
);


ALTER TABLE public.record OWNER TO postgres;

--
-- Name: specialize; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specialize (
    id integer NOT NULL,
    email character varying(60) NOT NULL
);


ALTER TABLE public.specialize OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    email character varying(60) NOT NULL,
    name character varying(30),
    surname character varying(40),
    salary integer,
    phone character varying(20),
    cname character varying(50)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.country (cname, population) FROM stdin;
Russia	20000000
Kazakhstan	10000000
China	30000000
USA	40000000
Canada	50000000
Japan	60000000
UK	70000000
Australia	80000000
Pakistan	90000000
India	100000000
Netherlands	15000000
\.


--
-- Data for Name: discover; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.discover (cname, disease_code, first_enc_date) FROM stdin;
Kazakhstan	C1	2010-10-01
Russia	C2	2011-10-01
China	C3	2012-10-01
USA	C4	2013-10-01
Canada	C5	2014-10-01
Japan	C6	2015-10-01
UK	C7	2016-10-01
Australia	C8	2017-10-01
Pakistan	C9	2018-10-01
India	C10	2019-10-01
Netherlands	Bac-1	1970-02-02
Netherlands	VIR	1960-03-03
\.


--
-- Data for Name: disease; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disease (disease_code, pathogen, description, id) FROM stdin;
C1	Cholera1	First Cholera	1
C2	Cholera2	Second Cholera	2
C3	Cholera3	Third Cholera	3
C4	Cholera4	Fourth Cholera	4
C5	Cholera5	Fifth Cholera	5
C6	Cholera6	Sixth Cholera	6
C7	Cholera7	Seventh Cholera	7
C8	Cholera8	Eighth Cholera	8
C9	Cholera9	Ninth Cholera	9
C10	Cholera10	Tenth Cholera	10
Bac-1	bacteria	This is bacteria disease	12
VIR	virus1	virology	14
covid-19	corona virus	coronavirus 19	15
\.


--
-- Data for Name: diseasetype; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.diseasetype (id, description) FROM stdin;
1	Thearthritis refers to about 120 different diseases that can affect the joints, muscles and other soft tissues.
2	second disease
3	third disease
4	fourth disease
5	fifth disease
6	sixths disease
7	seventh disease
8	eighth disease
9	nineth disease
10	tenth disease
11	\N
12	This is bacteria disease
14	virology
15	coronavirus 19
\.


--
-- Data for Name: doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctor (email, degree) FROM stdin;
adam@gmail.com	bachelor
asyl@gmail.com	school
zhang@gmail.com	bachelor
trevor@gmail.com	master
bob@gmail.com	phd
kassym@gmail.com	school
ian@gmail.com	bachelor
alan@gmail.com	master
selim@gmail.com	phd
prakash@gmail.com	bachelor
koishiyevArman@gmail.com	phd
drvirology1@gmail.com	phd
drvirology2@gmail.com	masters
\.


--
-- Data for Name: publicservant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicservant (email, department) FROM stdin;
adam@gmail.com	department1
asyl@gmail.com	department2
zhang@gmail.com	department3
trevor@gmail.com	department4
bob@gmail.com	department5
kassym@gmail.com	department6
ian@gmail.com	department7
alan@gmail.com	department8
selim@gmail.com	department9
prakash@gmail.com	department10
Arnapb@gmail.com	department11
kostyapb@gmail.com	department20
\.


--
-- Data for Name: record; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.record (email, cname, disease_code, total_deaths, total_patients) FROM stdin;
adam@gmail.com	Kazakhstan	C1	10000	100000
asyl@gmail.com	Russia	C2	20000	200000
zhang@gmail.com	China	C3	30000	300000
trevor@gmail.com	USA	C4	40000	400000
bob@gmail.com	Canada	C5	50000	500000
kassym@gmail.com	Japan	C6	60000	600000
ian@gmail.com	UK	C7	70000	700000
alan@gmail.com	Australia	C8	80000	800000
selim@gmail.com	Pakistan	C9	90000	900000
prakash@gmail.com	India	C10	100000	1000000
Arnapb@gmail.com	Netherlands	Bac-1	\N	\N
kostyapb@gmail.com	Netherlands	covid-19	\N	\N
kostyapb@gmail.com	UK	covid-19	\N	\N
kostyapb@gmail.com	Australia	covid-19	\N	\N
Arnapb@gmail.com	Australia	covid-19	\N	\N
Arnapb@gmail.com	UK	covid-19	70	700
Arnapb@gmail.com	Kazakhstan	covid-19	70	700
Arnapb@gmail.com	Japan	covid-19	700	7000
Arnapb@gmail.com	USA	covid-19	50000	7000000
Arnapb@gmail.com	Russia	covid-19	50000	70000000
\.


--
-- Data for Name: specialize; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.specialize (id, email) FROM stdin;
1	adam@gmail.com
2	asyl@gmail.com
3	zhang@gmail.com
4	trevor@gmail.com
5	bob@gmail.com
6	kassym@gmail.com
8	alan@gmail.com
9	selim@gmail.com
10	prakash@gmail.com
7	ian@gmail.com
10	koishiyevArman@gmail.com
11	koishiyevArman@gmail.com
12	koishiyevArman@gmail.com
14	drvirology1@gmail.com
14	drvirology2@gmail.com
7	drvirology1@gmail.com
8	drvirology1@gmail.com
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (email, name, surname, salary, phone, cname) FROM stdin;
adam@gmail.com	Adam	Adamov	100000	87775553211	Kazakhstan
asyl@gmail.com	Asyl	Asylov	200000	87775553212	Russia
zhang@gmail.com	Zhang	Zhangov	300000	87775553213	China
trevor@gmail.com	Trevor	Trevorov	400000	87775553214	USA
bob@gmail.com	Bob	Bobov	500000	87775553215	Canada
kassym@gmail.com	Kassym	Kassymov	600000	87775553216	Japan
ian@gmail.com	Ian	Ianov	700000	87775553217	UK
alan@gmail.com	Alan	Alanov	800000	87775553218	Australia
selim@gmail.com	Selim	Selimov	900000	87775553219	Pakistan
prakash@gmail.com	Prakash	Prakashov	1000000	87775553220	India
drvirology1bek@gmail.com	Armanbek	Koishiyevbek	50000	87000000000	Netherlands
drvirology1bekbek@gmail.com	Armannbek	Koishiyevvbek	50000	87000000000	Netherlands
koishiyevArman@gmail.com	Arman	Koishiyev	50000	87000000000	Netherlands
drvirology1@gmail.com	Arthur1	Arthurov1	500000	87000000003	Netherlands
drvirology2@gmail.com	Arthur2	Arthurov2	600000	87000000006	Netherlands
kostyapb@gmail.com	Kostya	Kostyeev	500000	87000000011	Netherlands
Arnapb@gmail.com	Arna	Ualieva	1000000	87000000001	Netherlands
\.


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (cname);


--
-- Name: discover discover_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discover
    ADD CONSTRAINT discover_pkey PRIMARY KEY (cname, disease_code);


--
-- Name: disease disease_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disease
    ADD CONSTRAINT disease_pkey PRIMARY KEY (disease_code);


--
-- Name: diseasetype diseasetype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diseasetype
    ADD CONSTRAINT diseasetype_pkey PRIMARY KEY (id);


--
-- Name: doctor doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (email);


--
-- Name: publicservant publicservant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicservant
    ADD CONSTRAINT publicservant_pkey PRIMARY KEY (email);


--
-- Name: record record_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY (email, cname, disease_code);


--
-- Name: specialize specialize_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialize
    ADD CONSTRAINT specialize_pkey PRIMARY KEY (id, email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);


--
-- Name: discover discover_cname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discover
    ADD CONSTRAINT discover_cname_fkey FOREIGN KEY (cname) REFERENCES public.country(cname);


--
-- Name: discover discover_disease_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discover
    ADD CONSTRAINT discover_disease_code_fkey FOREIGN KEY (disease_code) REFERENCES public.disease(disease_code);


--
-- Name: disease disease_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disease
    ADD CONSTRAINT disease_id_fkey FOREIGN KEY (id) REFERENCES public.diseasetype(id);


--
-- Name: doctor doctor_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: publicservant publicservant_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicservant
    ADD CONSTRAINT publicservant_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: record record_cname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_cname_fkey FOREIGN KEY (cname) REFERENCES public.country(cname);


--
-- Name: record record_disease_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_disease_code_fkey FOREIGN KEY (disease_code) REFERENCES public.disease(disease_code);


--
-- Name: record record_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_email_fkey FOREIGN KEY (email) REFERENCES public.publicservant(email);


--
-- Name: specialize specialize_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialize
    ADD CONSTRAINT specialize_email_fkey FOREIGN KEY (email) REFERENCES public.doctor(email);


--
-- Name: specialize specialize_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialize
    ADD CONSTRAINT specialize_id_fkey FOREIGN KEY (id) REFERENCES public.diseasetype(id);


--
-- Name: users users_cname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cname_fkey FOREIGN KEY (cname) REFERENCES public.country(cname);


--
-- PostgreSQL database dump complete
--

