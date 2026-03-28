--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-05-29 11:08:28

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
-- TOC entry 216 (class 1259 OID 16467)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id_category integer NOT NULL,
    category_name character varying(50)
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16466)
-- Name: category_id_category_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_category_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_category_seq OWNER TO postgres;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 215
-- Name: category_id_category_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_category_seq OWNED BY public.category.id_category;


--
-- TOC entry 218 (class 1259 OID 16474)
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id_address integer NOT NULL,
    street character varying(100),
    number character varying(5),
    district character varying(20),
    city character varying(30),
    coordinates character varying(50)
);


ALTER TABLE public.address OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16473)
-- Name: address_id_address_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_id_address_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_id_address_seq OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 217
-- Name: address_id_address_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_address_seq OWNED BY public.address.id_address;


--
-- TOC entry 222 (class 1259 OID 16503)
-- Name: image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.image (
    id_image integer NOT NULL,
    image_directory character varying(256)
);


ALTER TABLE public.image OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16502)
-- Name: image_id_image_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.image_id_image_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.image_id_image_seq OWNER TO postgres;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 221
-- Name: image_id_image_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.image_id_image_seq OWNED BY public.image.id_image;


--
-- TOC entry 220 (class 1259 OID 16481)
-- Name: report; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.report (
    id_report integer NOT NULL,
    title character varying(100),
    description character varying(256),
    fk_user_cpf character varying(15),
    fk_category_id_category integer,
    fk_address_id_address integer
);


ALTER TABLE public.report OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16480)
-- Name: report_id_report_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.report_id_report_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.report_id_report_seq OWNER TO postgres;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 219
-- Name: report_id_report_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.report_id_report_seq OWNED BY public.report.id_report;


--
-- TOC entry 223 (class 1259 OID 16509)
-- Name: report_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.report_image (
    fk_report_id_report integer,
    fk_image_id_image integer
);


ALTER TABLE public.report_image OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16461)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user (
    name character varying(70) NOT NULL,
    cpf character varying(15) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(30) NOT NULL
);


ALTER TABLE public.user OWNER TO postgres;

--
-- TOC entry 3196 (class 2604 OID 16470)
-- Name: category id_category; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id_category SET DEFAULT nextval('public.category_id_category_seq'::regclass);


--
-- TOC entry 3197 (class 2604 OID 16477)
-- Name: address id_address; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id_address SET DEFAULT nextval('public.address_id_address_seq'::regclass);


--
-- TOC entry 3199 (class 2604 OID 16506)
-- Name: image id_image; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.image ALTER COLUMN id_image SET DEFAULT nextval('public.image_id_image_seq'::regclass);


--
-- TOC entry 3198 (class 2604 OID 16484)
-- Name: report id_report; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report ALTER COLUMN id_report SET DEFAULT nextval('public.report_id_report_seq'::regclass);


--
-- TOC entry 3203 (class 2606 OID 16472)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id_category);


--
-- TOC entry 3205 (class 2606 OID 16479)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id_address);


--
-- TOC entry 3209 (class 2606 OID 16508)
-- Name: image image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.image
    ADD CONSTRAINT image_pkey PRIMARY KEY (id_image);


--
-- TOC entry 3207 (class 2606 OID 16486)
-- Name: report report_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_pkey PRIMARY KEY (id_report);


--
-- TOC entry 3201 (class 2606 OID 16465)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user
    ADD CONSTRAINT user_pkey PRIMARY KEY (cpf);


--
-- TOC entry 3210 (class 2606 OID 16492)
-- Name: report report_fk_category_id_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_fk_category_id_category_fkey FOREIGN KEY (fk_category_id_category) REFERENCES public.category(id_category);


--
-- TOC entry 3211 (class 2606 OID 16497)
-- Name: report report_fk_address_id_address_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_fk_address_id_address_fkey FOREIGN KEY (fk_address_id_address) REFERENCES public.address(id_address);


--
-- TOC entry 3212 (class 2606 OID 16487)
-- Name: report report_fk_user_cpf_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_fk_user_cpf_fkey FOREIGN KEY (fk_user_cpf) REFERENCES public.user(cpf);


--
-- TOC entry 3213 (class 2606 OID 16517)
-- Name: report_image report_image_fk_image_id_image_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report_image
    ADD CONSTRAINT report_image_fk_image_id_image_fkey FOREIGN KEY (fk_image_id_image) REFERENCES public.image(id_image);


--
-- TOC entry 3214 (class 2606 OID 16512)
-- Name: report_image report_image_fk_report_id_report_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report_image
    ADD CONSTRAINT report_image_fk_report_id_report_fkey FOREIGN KEY (fk_report_id_report) REFERENCES public.report(id_report);


-- Completed on 2023-05-29 11:08:28

--
-- PostgreSQL database dump complete
--

